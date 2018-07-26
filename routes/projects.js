var express = require('express');
var router = express.Router();

const projectsDB = require("../core/projects-controller.js");

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('projects', {projects: projectsDB.all()});
});

router.get('/:id', function(req, res) {
  var project = projectsDB.get(req.params.id);
  var template = project.template || 'project';
  res.render(template, {project: projectsDB.get(req.params.id)});
});

module.exports = router;
