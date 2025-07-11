var database = {
    _list: [
        {
            _class: "project",
            id: "homebound",
            title: "Homebound",
            year: "2021-2025",
            type: "comic",
            short: "A tale of astronauts, talking lizards and a lost baby",
            data: {
                type: "Comic",
                platform: "Print",
                year: "2021-2025"
            },
            template: "projects/project-homebound",
            about: ["Follow the story of Ona, an 18-month toddler stuck with three strangers: a talking lizard, his human sister and a space traveler.",
                    "Together, they embark on a road trip full of comedy, action and slice-of-life scenes across a cozy yet mysterious planet, on a journey to find the baby's home.",
                    "Page count: 250-ish when finished",
                    "12 years and up"
            ],
            getit: "Soon on <a href='https://thebadladns.itch.io/homebound-wip'>itch.io</a>?",
            credits: {
                "Concept, story, art, lettering, book formatting": "Carlos Jambrina (<a href='https://twitter.com/crljmb'>@crljmb</a>)",
                "Editing, story consulting, support": "Rafa de la Hoz (<a href='https://twitter.com/thegraffo'>@thegraffo</a>)"
            },
            sampleInfo: {
                imagePrefix: "/images/projects/homebound/samples/homebound_",
                imageSuffix: ".png",
                layoutSinglePages: [
                    1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
                    31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
                    61,62,63,64,65,66,67
                ],
                layoutDoublePages: [
                    [ 0, 1],[ 2, 3],[ 4, 5],[ 6, 7],[ 8, 9],[10,11],[12,13],[14,15],[16,17],[18,19],
                    [20,21],[22,23],[24,25],[26,27],[28, 0],[29,30],[31,32],[33,34],[35,36],[37,38],[39,40],
                    [41,42],[43,44],[45,46],[47,48],[49,50],[51, 0],[52,53],[54,55],[56,57],[58,59],
                    [60,61],[62,63],[64,65],[66,67]
                ],
                outro: "That's it! <br/> Those are the first pages of Homebound.<br/> \
                        If you liked it, here’s the good news: there’s more! \
                        Five books, 264 pages total! plus a lot of behind the scene sketches!<br/> \
                        Color covers, even! Wowsies!<br/> \
                        Check out the details here:"
            },
            status: "almost there"
        },
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
            template: "projects/project-spaceoverlords",
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
                "Concept, Design, Graphics, Coding": "Rafa de la Hoz (<a href='https://twitter.com/thegraffo'>@thegraffo</a>)",
                "Additional design, illustration and support": "Carlos Jambrina (<a href='https://twitter.com/crljmb'>@crljmb</a>)"
            },
            status: "released"
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
                "Super Mario World, Nintendo, 1990",
                "CATBOMB, The Badladns, 2014"
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
            id: "asilentnight",
            title: "A Silent Night",
            year: "2016-2017",
            type: "comic",
            short: "Dark, mysterious, acrobatic. Go get 'em!",
            data: {
                type: "Comic",
                platform: "Web, Print",
                year: "2016-2017"
            },
            about: ["A Silent Night is an exploration of visual storytelling and martial arts coreography, presented as a vignette of a larger, untold, story.",
                    "Originally planned as a two-part comic book, the project was eventually re-scoped into a single issue release as most ideas for a second chapter were further pushing it into an undesired glorification of violence.",
                    "Part I was developed between the Summer of 2016 and early 2017."
            ],
            getit: "<a href='/projects/asilentnight/sample'>Read online</a>",
            credits: {
                "Concept, Art": "Carlos Jambrina (<a href='https://twitter.com/crljmb'>@crljmb</a>)"
            },
            sampleInfo: {
                imagePrefix: "/images/projects/asilentnight/samples/",
                imageSuffix: ".png",
                layoutSinglePages:
                [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
                layoutDoublePages: [
                    [25, 1],[ 0, 2],[ 3, 4],[ 5, 6],[ 7, 8],[ 9,10],[11,12],[13,14],[15,16],[17,18],
                    [19,20],[21,22],[23,24]
                ],
            },
            status: "released"
        },
        {
            _class: "project",
            id: "axe",
            title: "Axe Throwing Arcade",
            year: "2013-2014",
            type: "videogame",
            short: "An unfished arcade about throwing an axe around dark dungeons",
            data: {
                type: "Videogame",
                genre: "Arcade",
                platform: "Desktop",
                year: "2013-2014"
            },
            about: ["Axe Throwing Arcade (AXE) is an action oriented platformer with unforgiving and fast-paced solo or two player cooperative gameplay. Being a coin-operated machine, coin gathering will be a key part of the game, adding strategic thinking to the mix.",
            "It was in active development between 2013 and 2014, written in C# leveraging Badladns' own <a href='https://the.badladns.com/projects/banana-engine'>Banana Engine</a>",
            "It was the first proper game project in the badladns."],
            getit: "AXE is currently on hold, development was halted after making treasure chests brighter <a href='https://github.com/thebadladns/AXE'>(honest!)</a>. It may return in some form, somehow, in the future.",
            ludography: [
                "Bubble Bobble, Taito, 1986",
                "Snow Bros, Toaplan, 1990",
                "Tumblepop, Data East, 1991",
                "Dark Souls, From Software, 2011"
            ],
            credits: {
                "Concept, Design, Graphics, Coding": "Carlos Jambrina (<a href='https://twitter.com/crljmb'>@crljmb</a>) & Rafa de la Hoz (<a href='https://twitter.com/thegraffo'>@thegraffo</a>)"
            },
            status: "on hold"
        },
        {
            _class: "engine",
            id: "banana-engine",
            title: "Banana Engine",
            year: "2012-2014",
            type: "game engine",
            short: "XNA based easy prototyping and quick development game engine",
            status: "not even close",
            about: [
                "Banana Engine is an initiative to build the ultimate game engine that badladners will use to develop ground breaking interactive experiences.",
                "It has the quintessential set of game engine objectives:",
                "◍ Manage the life cycle of the small virtual tennants of a game world,",
                "◍ Allow those tennants to express themselves on screen or audio systems of human beings,",
                "◍ Provide facilities for human beings to interact with these game worlds,",
                "◍ All while trying to make the game developer's life easier.",
                "Of course it works <span class='secret'>-just barely</span>",
                "It is written in C# on top of XNA to add very simple game state based entity management capabilities, and has been used in at least one <span class='secret'>unfinished</span> badladns project.",
                "We had fun doing this, but keep in mind that it may not actually be useful to anybody, anyhow, anywhere, ever."
            ],
            getit: "You can find the full engine codebase in Github <a href='https://github.com/thebadladns/banana-engine'>here</a>",
            credits: {
                "Design + Coding": "Carlos Jambrina (<a href='https://twitter.com/crljmb'>@crljmb</a>) & Rafa de la Hoz (<a href='https://twitter.com/thegraffo'>@thegraffo</a>)"
            },
        },
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
