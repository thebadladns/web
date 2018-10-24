
const fs = require('fs');
const mkdirp = require('mkdirp');
const archiver = require('archiver');

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
    },

    generateLogsPackage: function generateLogsPackage(callback) {
        var now = new Date();
        var zipname = "logs-" + now.getTime() + ".zip";
        var output = fs.createWriteStream(zipname);
        var archive = archiver('zip');

        output.on('close', function() {
            callback(zipname);
        });

        archive.on('error', function(err) {
            throw err;
        });

        archive.pipe(output);
        var dirs = fs.readdirSync(controller.logpath);
        for (var i = 0; i < dirs.length; i++) {
            archive.directory(controller.logpath + "/" + dirs[i], dirs[i]);
        }

        archive.finalize();
    },

    deleteLogsPackage: function deleteLogsPackage(filename) {
        fs.unlink(filename, function(err) {
            if (err)
                throw err;
        });
    }
};

module.exports = controller;
