
const fs = require('fs');

var controller = {
    dbfile: 'so-api.db',

    store: function store(session) {
        fs.appendFile(controller.dbfile, JSON.stringify(session) + "\n", function (err) {
            if (err)
                throw err;
            // console.log("Saved report");
        });
    }
};

module.exports = controller;
