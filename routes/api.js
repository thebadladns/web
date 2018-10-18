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
    sessionObj.uuid = req.body.id;
    spaceOverlordsApiController.store(sessionObj);

    res.setHeader('Content-Type', 'application/json');
    res.send();
});

router.post('/spaceoverlords/log', function(req, res, next) {
    var uuid = req.body.id;
    var logString = req.body.contents;

    spaceOverlordsApiController.log(uuid, logString);

    res.setHeader('Content-Type', 'application/json');
    res.send();
});

router.get('/spaceoverlords/overview', function(req, res, next) {
    spaceOverlordsApiController.all(function(data) {
        // Data in form of JSON entries per line
        var output = "";

        output += "start time\tend time\tmode\tintensity\tduration\tscore\titems\tcycle\tfallspeed\n";

        var lines = ("" + data).split("\n");
        for (var i = 0; i < lines.length; i++)
        {
            if (lines[i].length > 0)
            {
                var obj = JSON.parse(lines[i]);

                output +=   tools.formatDate(obj.startTime) + "\t" +  
                            tools.formatDate(obj.endTime) + "\t" + 
                            (obj.mode == 0 ? "P" : "R") + "\t" +
                            obj.intensity + "\t" + 
                            ((obj.endTime - obj.startTime) / 1000) + "\t" + 
                            obj.score + "\t" + 
                            obj.items + "\t" + 
                            obj.cycle + "\t" + 
                            obj.fallSpeed + "\t" +
                            "\n";
            }
        }

        res.setHeader('Content-Type', 'application/json');
        res.send(output);
    });
});

const tools = {
    formatDate: function formatDate(dateStr) {
        if (dateStr) {
            date = new Date(dateStr);
            return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        }
        return "<no date>";
    }
}

module.exports = router;