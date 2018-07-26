const database = require("../db/projectsdb.js");

var controller = {
    all: function() {
        return database.all();
    },

    get: function(projectId) {
        return database.get(projectId);
    }
}

module.exports = controller;
