var express = require('express');
var router = express.Router();

const projectsController = require("../core/projects-controller.js");

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('projects', {title: "Projects of the Badladns", projects: projectsController.all()});
});

router.get('/:id', function(req, res) {
  var project = projectsController.get(req.params.id);
  var template = project.template || 'project';
  res.render(template, {
    title: project.title + ", a project from the Badladns",
    project: projectsController.get(req.params.id),
    images: projectsController.getImages(req.params.id)
  });
});

module.exports = router;
