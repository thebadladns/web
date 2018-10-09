var express = require('express');
var router = express.Router();

const spaceOverlordsApiController = require("../core/spaceoverlords-api-controller.js");

/* GET api base. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send("Welcome to Badladns' API base URI. Why are you here?");
});

/* SPACE OVERLORDS REPORT API */
router.post('/spaceoverlords/report', function(req, res, next) {
    var sessionObj = JSON.parse(req.body.session);
    spaceOverlordsApiController.store(sessionObj);

    res.setHeader('Content-Type', 'application/json');
    res.send();
});
  
module.exports = router;