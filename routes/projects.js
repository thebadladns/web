var express = require('express');
var router = express.Router();

const projectsDB = require("../core/projects-controller.js");

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('projects', {projects: projectsDB.getProjects()});
});

module.exports = router;
