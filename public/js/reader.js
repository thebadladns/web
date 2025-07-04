var reader = {
  // leftPageElem, rightPageElem, zoom, layout, tutorial
  isLeftKeyDown: false, isRightKeyDown: false,
  onload: function(leftPageIndex, zoom, layout, tutorial) {

    this.leftPageIndex = +leftPageIndex;
    this.tutorial = tutorial;

    // handle client-side automatic single or double page layout
    const aspectRatioDevice = window.innerWidth / window.innerHeight;
    this.leftPageElem = document.getElementById("leftPage");
    let aspectRatioPage = this.leftPageElem.width / this.leftPageElem.height;
    const portrait = aspectRatioDevice < 1;
    if (layout === 'auto-layout') {
      if (portrait) {
        layout = "single";
      } else {
        layout = "double";
        // before removing the auto-something classes from this element (which will make it appear),
        // remove the image if we are going to transition to double page layout, since we'll reset
        // both images down below
        this.leftPageElem.src = "";
      }
      // update DOM elements that need the right layout class
      let autoLayoutElems = Array.from(document.getElementsByClassName("auto-layout"));
      for (let elem of autoLayoutElems) {
        elem.classList.remove("auto-layout");
        elem.classList.add(layout);
      }
    }
    this.layout = layout;
  
    // handle client-side automatic zoom
    if (zoom === 'auto-zoom') {
      if (this.layout === "double") aspectRatioPage *= 2;
      zoom = (aspectRatioPage < aspectRatioDevice) ? "fitV" : "fitH";
      // update DOM elements that need the right zoom class
      let autoZoomElems = Array.from(document.getElementsByClassName("auto-zoom"));
      for (let elem of autoZoomElems) {
        elem.classList.remove("auto-zoom");
        elem.classList.add(zoom);
      }
    }
    this.zoom = zoom;

    // adjust the DOM if we don't have the right components for double page layout
    // (this is expected if the layout was unspecified)
    this.rightPageElem = document.getElementById("rightPage");
    if (this.layout === "double" && !this.rightPageElem) {
      let rightPageElem = document.createElement('img');
      rightPageElem.id = "rightPage";
      rightPageElem.className = "page right " + this.layout + " " + this.zoom;
      this.leftPageElem.after(rightPageElem);
      this.rightPageElem = rightPageElem;

      let context = switchToPage(this.leftPageIndex, true, bookInfo);
      this.leftPageElem.src = context.contentSrcs[0];
      this.rightPageElem.src = context.contentSrcs[1];
      context.cachedContentSrcs.forEach(function(val, index) {
        if (!document.getElementById("cachedPage" + index)) {
          let cacheElem = document.createElement('img');
          cacheElem.id = "cachedPage" + index;
          cacheElem.className = "cache";
          reader.rightPageElem.after(cacheElem);
          cacheElem.src = val;
        }
      });
    }

    // Handle transitions when page images are loaded
    this.leftPageElem.onload = function() {  // on callbacks, the this pointer is the HTML doc
      this.classList.remove("fadeout");
    }
    if (this.rightPageElem) {
      this.rightPageElem.onload = function() {  // on callbacks, the this pointer is the HTML doc
        this.classList.remove("fadeout");
      }
    }

    // Keyboard controls
    document.onkeydown = function (event) { // on callbacks, the this pointer is the HTML doc
      if (!reader.isLeftKeyDown && event.key == "ArrowLeft") {
        reader.isLeftKeyDown = true;
        reader.navigateLeft();
      } else if (!reader.isRightKeyDown && event.key == "ArrowRight") {
        reader.isRightKeyDown = true;
        reader.navigateRight();
      }
    };
    document.onkeyup = function (event) { // on callbacks, the this pointer is the HTML doc
      if (event.key == "ArrowLeft") { reader.isLeftKeyDown = false; }
      else if (event.key == "ArrowRight") { reader.isRightKeyDown = false; }
    };

    // update the current history with the recomputed parameters
    window.history.replaceState({ page:this.leftPageIndex}, "", this.makeCurrentURL());
    window.onpopstate = function (e) {
      if (e.state) {
        // handle page changes
        reader.navigateToPage(e.state.page, false);
        // handle tutorial modal changes
        if (reader.tutorial != e.state.tutorial) { reader.toggleTutorial(false); }
        // remove the outro message when going back, no matter what
        let outroElem = document.getElementById("outro");
        outroElem.classList.remove("visible");
      }
    };
  },
  makeCurrentURL: function() {
    let baseURL = window.location.href.split('?')[0];
    return baseURL + '?' +
      'pageid=' + this.leftPageIndex +
      '&layout=' + this.layout +
      '&zoom=' + this.zoom +
      '&tutorial=' + this.tutorial;
  },
  // View options
  toggleLayout: function() {
    // Because the double page layout tends to have more pages than the single page
    // (it can introduce additional pages to ensure left and right pages end up in
    // the right place), we can't use the same page index when switching from one layout to
    // another. Instead, we'll look at what page contents we are showing right now, and find
    // a page or spread with matching contents.
    // If this process ever fails, we could consider allowing the user to provide a map between
    // the two layouts.
    if (this.layout == 'single') {
      // when switching from single to double page layout, we'll try to find the current page
      // content in any of the book's double page spreads.
      this.layout = 'double';
      let spreadIndex = 0;
      let currentPage = bookInfo.layoutSinglePages[this.leftPageIndex];
      for(var i = 0; i < bookInfo.layoutDoublePages.length; i++) {
        if (bookInfo.layoutDoublePages[i][0] == currentPage) { spreadIndex = i; break; }
        if (bookInfo.layoutDoublePages[i][1] == currentPage) { spreadIndex = i; break; }
      }
      this.leftPageIndex = spreadIndex * 2;
    } else if (this.layout == 'double') {
      // when switching from double to single page layout, we'll look for a single page that
      // matches any of the page contents in the current spread
      this.layout = 'single';
      let spreadIndex = Math.floor(this.leftPageIndex/2);
      let spread = bookInfo.layoutDoublePages[spreadIndex];
      for(var i = 0; i < bookInfo.layoutSinglePages.length; i++) {
        if (bookInfo.layoutSinglePages[i] == spread[0]) { this.leftPageIndex = i; break; }
        if (bookInfo.layoutSinglePages[i] == spread[1]) { this.leftPageIndex = i; break; }
      }
    }
    window.location.href = this.makeCurrentURL();
  },
  toggleZoom: function() {
    if (this.zoom == 'fitH') { this.zoom = 'fitV'; }
    else if (this.zoom == 'fitV') { this.zoom = 'fitH'; }
    window.location.href = this.makeCurrentURL();
  },
  toggleTutorial: function(pushState) {
    this.tutorialElem = document.getElementById("tutorial");
    if (this.tutorial === "showtutorial") {
      this.tutorial = "hidetutorial";
      // hide modal
      this.tutorialElem.classList.remove("visible");
      // handle footer button text
      let buttonElem = document.getElementsByClassName("button showtutorial")[0];
      if (buttonElem) {
        buttonElem.classList.remove("showtutorial");
        buttonElem.classList.add("hidetutorial");
      }
    } else if (this.tutorial === "hidetutorial") {
      this.tutorial = "showtutorial";
      // show modal
      this.tutorialElem.classList.add("visible");
      // handle footer button
      let buttonElem = document.getElementsByClassName("button hidetutorial")[0];
      if (buttonElem) {
        buttonElem.classList.remove("hidetutorial");
        buttonElem.classList.add("showtutorial");
      }
    }
    if (pushState) {
      let state = { page:this.leftPageIndex, tutorial: this.tutorial };
      window.history.pushState(state, "", this.makeCurrentURL());
    }
    
  },
  // Page navigation
  navigateToPage: function(page, pushState) {
    
    // figure out what the actual page and images to show are
    let oldLeftPageIndex = this.leftPageIndex;
    let context = switchToPage(page, this.rightPageElem != null, bookInfo);
    this.leftPageIndex = context.leftPageIndex;

    // Update view
    this.leftPageElem.src = context.contentSrcs[0];
    if (this.rightPageElem) {
      this.rightPageElem.src = context.contentSrcs[1];
    }

    // update page image caches
    context.cachedContentSrcs.forEach(function(val, index) {
      document.getElementById("cachedPage" + index).src = val;
    });

    // Update URL if needed
    if (this.leftPageIndex != oldLeftPageIndex) {
      // Trigger an animation on the pages, if the result is not already available (i.e cached)
      if (!this.leftPageElem.complete) this.leftPageElem.classList.add("fadeout");
      if (this.rightPageElem && !this.rightPageElem.complete) { this.rightPageElem.classList.add("fadeout"); }
      if (pushState) {
        let state = { page:this.leftPageIndex, tutorial: this.tutorial };
        window.history.pushState(state, "", this.makeCurrentURL());
      }
    }
  },
  navigateLeft: function() {
    this.navigateToPage(this.leftPageIndex - 1, true);
  },
  navigateRight: function() {
    // end of page navigation: show outro modal
    if ((this.layout === "double" &&
          bookInfo.layoutDoublePages.length == Math.floor(this.leftPageIndex / 2) + 1)
      || (bookInfo.layoutSinglePages.length == this.leftPageIndex + 1)) {
        let outroElem = document.getElementById("outro");
        outroElem.classList.add("visible");
    }
    // normal navigation
    else {
      this.navigateToPage(
        this.rightPageElem != null ? this.leftPageIndex + 2 : this.leftPageIndex + 1, true);
    }
  }
};