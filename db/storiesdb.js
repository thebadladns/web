var database = {
    _list: [
        {
            _class: "story",
            id: "not-top",
            title: "not top",
            type: "Game design rambles",
            author: "Carlos Jambrina",
            date: "14/10/2019",
            visible: true,
            abstract: "Really 'what if JRPGs where more like Breath of the Wild'",
            template: "stories/not-top"
        },
        {
            _class: "story",
            id: "exp-approach-info",
            title: "Info on exponential approaches",
            type: "Tech write-up",
            author: "Carlos Jambrina",
            date: "19/02/2019",
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
            date: "06/02/2019",
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
            body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed suscipit urna. Sed libero magna, dignissim eu neque vitae, pharetra tristique nulla. Morbi sed nibh at purus rhoncus eleifend. Donec eget diam aliquam, tempus mauris et, scelerisque nibh. Aliquam imperdiet quam tellus, id rhoncus justo convallis non. Curabitur quis augue eget elit tincidunt vestibulum vel non elit. Proin ex nibh, maximus ut tempor ultrices, tristique vel metus. Integer diam tortor, scelerisque sit amet ante et, imperdiet pharetra nulla. Phasellus pharetra ante ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent sed vulputate metus, et interdum augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce libero odio, lobortis quis dolor at, aliquam convallis quam. Nunc risus est, vulputate eu risus sit amet, venenatis ultrices velit.",
                   "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce fringilla finibus nunc, vel scelerisque diam accumsan ultrices. Nullam justo arcu, elementum sed tincidunt eget, maximus vel enim. Quisque aliquet convallis faucibus. In a porta enim. Donec porta, magna rhoncus porta pretium, odio enim pellentesque eros, ac pretium ante est ut ex. Nunc tincidunt, magna et tempor mattis, ligula ipsum lacinia nisl, nec consequat diam elit non nulla. Nulla fringilla lorem tellus, in efficitur nisi condimentum at. Aenean sed ullamcorper lacus, at posuere nulla. Nulla porta euismod erat, sit amet consequat ex vehicula sed. Mauris fermentum interdum nunc, ut maximus felis tincidunt sagittis. Suspendisse suscipit, nunc quis dignissim feugiat, nibh ipsum pharetra nisi, vel faucibus tellus dui in arcu. Aliquam laoreet arcu in sapien ornare auctor.",
                   "Suspendisse nunc metus, efficitur quis purus vitae, aliquam rhoncus quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec egestas augue et augue bibendum tempor. Aenean egestas ornare diam at hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum mauris quis aliquam bibendum. Aliquam porta nisi quis condimentum gravida. Nunc ultrices, nisl ut iaculis consequat, sapien ante tincidunt diam, eget interdum lectus libero et urna. Aliquam vel lectus metus. Nulla interdum ultricies leo a consectetur. Aliquam ultricies risus id magna tincidunt facilisis. Morbi viverra quam eu lectus tincidunt sollicitudin vitae quis ligula.",
                   "Proin cursus massa ac massa imperdiet, quis condimentum justo lobortis. In et nunc purus. Maecenas feugiat, ante non interdum dictum, erat metus imperdiet eros, eget elementum enim mauris eu urna. Aliquam at nibh nec ligula pharetra condimentum vel ac justo. Phasellus lobortis accumsan eros vitae molestie. Nam accumsan ipsum sapien, ac iaculis elit aliquet ac. Etiam at diam non nibh vehicula varius. Ut fringilla dapibus arcu, id vehicula diam molestie at. Nunc id tristique mauris, non mattis lacus."]
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
