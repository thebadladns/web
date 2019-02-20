var database = {
    _list: [
        {
            _class: "story",
            id: "exp-approach-info",
            title: "Info on exponential approaches",
            type: "Tech write-up",
            author: "Carlos Jambrina",
            date: "19/02/2018",
            visible: true,
            abstract: "Brain dump of what little I know about them",
            template: "stories/exp-approach-info"
        },
        {
            _class: "story",
            id: "exp-approach",
            title: "Exponential approach tool",
            type: "Tech tool",
            author: "Carlos Jambrina",
            date: "06/02/2018",
            abstract: "I swear they are useful and maybe this helps use them",
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
