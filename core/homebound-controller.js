const database = require('../db/projectsdb.js');

const fs = require('fs');

const getImages = function(dataDir, publicDir) {
    try {
        var files = fs.readdirSync(dataDir, { withFileTypes: true }).filter(dirent => !dirent.isDirectory() && /(jpeg|jpg|png|gif)$/.test(dirent.name));
        var images = [];
        for (var i in files) {
            images.push(publicDir + '/' + files[i].name);
        }
        return images;
    } catch (exception) {
        // Path does not exist, or there are no permissions
        // Return no images
        return [];
    }
}

var controller = {
    get: function(projectId) {
        return database.get(projectId);
    },
    getPages: function() {
        const directory = 'public/images/projects/homebound';
        const publicDirectory = '/images/projects/homebound';
        return getImages(directory, publicDirectory);
    },
    pickProgress: function() {
        const directory = 'public/images/projects/homebound/progress';
        const publicDirectory = '/images/projects/homebound/progress';
        try {
            var dirents = fs.readdirSync(directory, { withFileTypes: true }).filter(dirent => dirent.isDirectory());
            if (dirents.length > 0) {
                var dirent = dirents[Math.floor(Math.random() * dirents.length)];
                return getImages(directory + "/" + dirent.name, publicDirectory + "/" + dirent.name);
            }
            return [];
        } catch (exception) {
            // Path does not exist, or there are no permissions
            // Return no images
            return [];
        }
    }
}

module.exports = controller;
