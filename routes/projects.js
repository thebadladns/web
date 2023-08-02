var express = require('express');
var router = express.Router();

const projectsController = require("../core/projects-controller.js");

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('projects', {title: "Projects of the Badladns", projects: projectsController.all()});
});

router.get('/homebound', function(req, res) {
  const homeboundController = require("../core/homebound-controller.js");
  var project = homeboundController.get('homebound');
  var template = project.template || 'project';
  res.render(template, {
    title: project.title + ", a graphic novel",
    project: project,
    pages: homeboundController.getPages(),
    progress: homeboundController.pickProgress()
  });
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
