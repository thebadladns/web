const database = require('../db/projectsdb.js');

const fs = require('fs');

var controller = {
    all: function() {
        return database.all();
    },

    get: function(projectId) {
        return database.get(projectId);
    },

    getImages: function(projectId) {
        const directory = 'public/images/projects/' + projectId;
        const publicDirectory = '/images/projects/' + projectId;
        try {
            var files = fs.readdirSync(directory, { withFileTypes: true }).filter(dirent => !dirent.isDirectory() && /(jpeg|jpg|png|gif)$/.test(dirent.name));
            var images = [];
            for (var i in files) {
                images.push(publicDirectory + '/' + files[i].name);
            }
            return images;
        } catch (exception) {
            // Path does not exist, or there are no permissions
            // Return no images
            return [];
        }
    }
}

module.exports = controller;
