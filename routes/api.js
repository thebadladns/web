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

router.get('/spaceoverlords/overview', function(req, res, next) {
    spaceOverlordsApiController.all(function(data) {
        // Data in form of JSON entries per line
        var output = "";

        output += "start time\tend time\tduration\tscore\n";

        var lines = ("" + data).split("\n");
        for (var i = 0; i < lines.length; i++)
        {
            if (lines[i].length > 0)
            {
                var obj = JSON.parse(lines[i]);

                output += new Date(obj.startTime) + "\t" + new Date(obj.endTime) + "\t" + ((obj.endTime - obj.startTime) / 1000) + "\t" + obj.score + "\n";
            }
        }

        res.setHeader('Content-Type', 'application/json');
        res.send(output);
    });
});

module.exports = router;