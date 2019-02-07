var express = require('express');
var router = express.Router();

const storiesController = require("../core/stories-controller.js");

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('stories', {title: "Stories from the Badladns", stories: storiesController.all()});
});

router.get('/:id', function(req, res) {
  var story = storiesController.get(req.params.id);
  var template = story.template || 'story';
  res.render(template, {
    title: story.title + ", a story from the Badladns",
    story: storiesController.get(req.params.id),
    // images: storiesController.getImages(req.params.id)
  });
});

module.exports = router;
