const database = require('../db/storiesdb.js');

const fs = require('fs');

var controller = {
    all: function() {
        return database.all();
    },

    get: function(storyId) {
        return database.get(storyId);
    }
}

module.exports = controller;
