const database = require('../db/projectsdb.js');

let switchToPage = function(leftPageIndex, isDoublePageLayout, bookInfo) {
    // find which page contents we need to load from the given page index
    let contents = [];
    if (isDoublePageLayout) {
        const layout = bookInfo.layoutDoublePages;
        // Find the two page spread to which the current page belongs to
        let spreadIndex = Math.floor(leftPageIndex / 2);
        spreadIndex = Math.max(Math.min(spreadIndex, layout.length - 1), 0);
        leftPageIndex = spreadIndex * 2;
        // load the left and right pages in this spread
        contents.push(layout[spreadIndex][0]);
        contents.push(layout[spreadIndex][1]);
        // load the pages in the spread before and after this one, as a cache mechanism
        contents.push(layout[Math.max(spreadIndex - 1, 0)][0]);
        contents.push(layout[Math.max(spreadIndex - 1, 0)][1]);
        contents.push(layout[Math.min(spreadIndex + 1, layout.length - 1)][0]);
        contents.push(layout[Math.min(spreadIndex + 1, layout.length - 1)][1]);
    } else {
        const layout = bookInfo.layoutSinglePages;
        leftPageIndex = Math.max(Math.min(leftPageIndex, layout.length - 1), 0);
        // load the requested page
        contents.push(layout[leftPageIndex]);
        // load the pages right before and after, as a cache mechanism
        contents.push(layout[Math.max(leftPageIndex - 1, 0)]);
        contents.push(layout[Math.min(leftPageIndex + 1, layout.length - 1)]);
    }
    // find the actual image urls behind each page
    let contentSrcs = [];
    contents.forEach(function(number, index) {
        contentSrcs.push(bookInfo.imagePrefix + number + bookInfo.imageSuffix);
    });

    let context = {};
    context.leftPageIndex = leftPageIndex;
    context.contentSrcs = contentSrcs.slice(0, isDoublePageLayout ? 2 : 1);
    context.cachedContentSrcs = contentSrcs.slice(isDoublePageLayout ? 2 : 1);

    return context;
}

var controller = {
    render: function(projectId, req, res) {
        let layout = req.query.layout || 'auto-layout';
        let zoom = req.query.zoom || 'auto-zoom';
        let tutorial = req.query.tutorial || 'showtutorial';
        let leftPage = +(req.query.pageid || 0);

        // Handle page selection
        const projectInfo = database.get(projectId);
        const bookInfo = projectInfo.sampleInfo;
        let context = switchToPage(leftPage, layout === 'double', bookInfo);

        res.render('reader', {
            project: projectInfo,
            switchToPageFn: switchToPage.toString(),
            bookInfoObj: JSON.stringify(bookInfo),
            leftPageIndex: context.leftPageIndex,
            contentSrcs: context.contentSrcs,
            cachedContentSrcs: context.cachedContentSrcs,
            layout: layout,
            zoom: zoom,
            tutorial: tutorial,
        });
    }
}

module.exports = controller;
