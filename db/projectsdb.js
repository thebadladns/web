var database = {
    _list: [
        {
            _class: "project",
            id: "spaceoverlords",
            title: "SPACE OVERLORDS",
            year: "2018",
            type: "videogame",
            short: "Obscure arcade puzzle about slavery and ecology. Wait wha-",
            data: {
                type: "Videogame",
                genre: "Arcade Puzzle",
                platform: "Mobile",
                year: "2018"
            },
            about: ["SPACE OVERLORDS is a work-in-progress project about ecology, slavery, and cute arcade puzzle action.",
                    "Join the SPACE OVERLORDS on their quest to clean former planets that are now ecological wastelands.",
                    "Be part of the enslaved cleaning workforce, work to reach your designated quota, and discover new things about the planet you are cleaning and the SPACE OVERLORDS race.",
                    "Features two exciting game modes to spend your captivity days: PROCESS and REFINE",
                    "SPACE OVERLORDS is a (dark) love letter to the arcade puzzle genre.",
                    "It was created on the second half of 2018"],
            getit: "SPACE OVERLORDS is not finished yet! (If you want to try it, or help with the testing, try sending us an email)",
            ludography: [
                "Nontan to Issho: Kuru Kuru Puzzle (ノンタンといっしょ くるくるパズル), Game Freak, 1994",
                "SOAP ALLEY, the Badladns, 2018"
            ],
            credits: {
                "Concept, Design, Graphics, Coding": "Rafa de la Hoz (<a href='https://twitter.com/thegraffo'>@thegraffo</a>)"
            },
            status: "in progress"
        },
        {
            _class: "project",
            id: "soapalley",
            title: "SOAP ALLEY",
            year: "2015-2018",
            type: "videogame",
            short: "Clean your pets in glorious arcade puzzle action! Colorful bubbles await!",
            template: "projects/project-soapalley",
            ludography: [
                "Puzzle Bobble, Taito, 1994",
                "Magical Drop, Data East, 1995", 
                "PICO-8 Fantasy Console, Lexaloffle, 20XX", 
                "Mario’s Picross, Jupiter-Ace-Nintendo, 1995", 
                "Super Mario World, Nintendo, 1990"
            ],
            status: "released"
        },
        {
            _class: "project",
            id: "catbomb",
            title: "CATBOMB",
            year: "2014",
            type: "videogame",
            short: "A Gameboy nouvelle classic created for the #gbjam",
            data: {
                type: "Videogame",
                genre: "Puzzle Platformer",
                platform: "Web",
                year: "2014"
            },
            about: ["CATBOMB is a puzzle platformer designed to comply with the aesthetic constraints of the original Game Boy.",
                    "Follow the adventures of CATBOMB, who has been imprisoned in the dungeon for eating a bomb and is trying to escape.",
                    "Carry bombs, light them up and use them to clear obstacles on your way to freedom.",
                    "CATBOMB was created for gbjam3, in 10 days, in the summer of 2014"],
            getit: "You can play CATBOMB directly on your browser in <a href='https://thegraffo.itch.io/cat-bomb'>itch.io</a> or <a href='https://gamejolt.com/games/cat-bomb/31152'>GameJolt</a>",
            ludography: [
                "Donkey Kong, Nintendo, 1994",
                "Bomberman 64, Hudson Soft, 1997"
            ],
            credits: {
                "Concept, Design, Graphics, Coding": "Rafa de la Hoz (<a href='https://twitter.com/thegraffo'>@thegraffo</a>)"
            },
            status: "released"
        },
        {
            _class: "project",
            id: "silentnight",
            title: "A Silent Night",
            year: "2017-2018",
            type: "comic",
            short: "Dark, mysterious, acrobatic. Go get 'em, girl",
            status: "in progress",
            visible: false
        },
        /*{
            _class: "project",
            id: "dummy1",
            title: "Dummy project",
            year: "2017-2018",
            type: "test",
            short: "Just testing short text",
            status: "in progress"
        },
        {
            _class: "project",
            id: "dummy2",
            title: "Longer dummy project",
            year: "2004",
            type: "test-long",
            short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum vel sem ut pharetra. Aliquam malesuada tortor at finibus ultrices. Nulla a enim hendrerit nisl tristique lacinia quis at sapien. Sed vel ligula dictum, blandit ante non, egestas urna. Duis eget nisi mi. Nullam sit amet lorem lorem. Sed eleifend purus vitae urna eleifend, eget scelerisque magna scelerisque. Phasellus molestie aliquam ex, at laoreet odio efficitur egestas. Pellentesque sed ante sed nunc feugiat tempor sed nec enim. Cras quis hendrerit enim. Donec at blandit urna.",
            status: "finished"
        },*/
        {
            _class: "project",
            id: "thebadladns",
            title: "The Badladns",
            year: "From 2011",
            type: "art collective",
            short: "Freeform intercontinental art collective",
            about: ["The Badladns is an art collective established in 2011 by Carlos Jambrina and Rafa de la Hoz.",
                    "It's unmanaged, unorganized, has no funding, and welcomes any kind of (reasonable) form of expression.",
                    "Badladners are free to work in projects on their own, or in collaboration with other creative people. In fact, attracting talent to the Badladns is part of our core objectives.",
                    "The Badladns was originally founded with the objective of developing interesting interactive experiences disguised as videogames. We both understand that videogames (and generally interactive media experiences) are becoming part of humankind narrative, and wan't to take part in that.",
                    "Don't hesitate to contact us, we will probably love working in something awesome together."],
            credits: {
                "The original badladners": "Carlos Jambrina & Rafa de la Hoz",
                // "Friends of the Badladns": "This could be you!"
            },
            status: "established"
        }
    ]
}

// Setup database ids and projects map
database._ids = [];
database._map = {};
for (var index in database._list)
{
    // Fetch project
    var project = database._list[index];
    // Store id
    database._ids.push(project.id);
    // Prepare map for quicker access
    database._map[project.id] = project;
}

database.all = function() {
    return database._list;
}

database.get = function(id) {
    return database._map[id];
}

module.exports = database;