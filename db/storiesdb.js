var database = {
    _list: [
        {
            _class: "story",
            id: "exp-approach",
            title: "Exponential approaches",
            type: "Tech note",
            author: "Carlos Jambrina",
            date: "06/02/2018",
            abstract: "Exponential approaches are good for your maths",
            template: "stories/exp-approach-tool"
        },
        {
            _class: "story",
            id: "what-this",
            title: "Testing stories",
            type: "Random rant",
            author: "Rafa de la Hoz",
            date: "08/02/2018",
            visible: false,
            abstract: "Testing these things",
            body: ["This is the body of the article",
                   "It will provide cool content (hopefully)",
                   "It may also tell some <span class='secret'>secrets</span>",
                   "Thanks for reading"]
        },
    ]
}

// Setup database ids and stories map
database._ids = [];
database._map = {};
for (var index in database._list)
{
    // Fetch story
    var story = database._list[index];
    // Store id
    database._ids.push(story.id);
    // Prepare map for quicker access
    database._map[story.id] = story;
}

database.all = function() {
    return database._list;
}

database.get = function(id) {
    return database._map[id];
}

module.exports = database;
