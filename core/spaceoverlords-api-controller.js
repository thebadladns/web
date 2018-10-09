
const fs = require('fs');

var controller = {
    dbfile: 'so-api.db',

    store: function store(session) {
        fs.appendFile(controller.dbfile, JSON.stringify(session) + "\n", function (err) {
            if (err)
                throw err;
            // console.log("Saved report");
        });
    },

    all: function all(callback) {
        fs.readFile(controller.dbfile, function(err, data) {
            if (err) throw err;
            if (callback)
                callback(data);
        });
    }
};

module.exports = controller;
