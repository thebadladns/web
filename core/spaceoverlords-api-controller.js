
const fs = require('fs');
const mkdirp = require('mkdirp');

var controller = {
    dbfile: 'so-api.db',
    dbpath: 'storage/api/',
    logpath: 'logs/api/spaceoverlords',

    store: function store(session) {
        var path = controller.dbpath;
        if (!fs.existsSync(path))
            mkdirp.sync(path);

        fs.appendFile(path + "/" + controller.dbfile, JSON.stringify(session) + "\n", function (err) {
            if (err)
                throw err;
            // console.log("Saved report");
        });
    },

    log: function log(uuid, log) {
        var path = controller.logpath + "/" + uuid + "/";
        if (!fs.existsSync(path))
            mkdirp.sync(path);

        var now = new Date();
        var logname = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() + ".log";

        fs.writeFile(path + "/" + logname, log, function(err) {
            if (err) throw err;
        });
    },

    all: function all(callback) {
        fs.readFile(controller.dbpath + "/" + controller.dbfile, function(err, data) {
            if (err) throw err;
            if (callback)
                callback(data);
        });
    }
};

module.exports = controller;
