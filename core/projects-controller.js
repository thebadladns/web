
var database = {
    list: [
        {
            _class: "project",
            id: "soapalley",
            title: "SOAP ALLEY",
            year: "2015-2018",
            type: "videogame",
            short: "Clean your pets in glorious arcade puzzle action! Colorful bubbles await!",
            status: "almost there"
        },
        {
            _class: "project",
            id: "catbomb",
            title: "CATBOMB",
            year: "2014",
            type: "videogame",
            short: "A Gameboy nouvelle classic created for the #gbjam",
            status: "released"
        },
        {
            _class: "project",
            id: "silentnight",
            title: "A Silent Night",
            year: "2017-2018",
            type: "comic",
            short: "Dark, mysterious, acrobatic. Go get 'em, girl",
            status: "in progress"
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
            status: "established"
        }
    ]
}

var controller = {
    getProjects: function() {
        return database.list;
    }
}

module.exports = controller;
