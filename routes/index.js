var express = require('express');
var router = express.Router();

const fs = require('fs');
const projectsController = require("../core/projects-controller.js");

const gallery = {
  "0.jpg": "Logo draft, 2018",
  "1.jpg": "Unnamed concept, 2018",
  "2.jpg": "Unnamed concept, 2018",
  "3.jpg": "Unnamed concept, 2018",
  "4.jpg": "Unnamed project + SOAP ALLEY, 2018",
  "5.png": "SOAP ALLEY, 2018",
  "6.gif": "SOAP ALLEY, 2018"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var project = projectsController.all();
  var entry = project[Math.floor(Math.random() * project.length)];
  var project_images = projectsController.getImages(entry.id);
  var img, detail;
  if (project_images.length > 0)
  {
    img = project_images[Math.floor(Math.random() * project_images.length)];
    detail = "/projects/" + entry.id;
  }
  else
  {
    var list = fs.readdirSync("public/images/gallery");
    var index = Math.floor(Math.random() * list.length);
    img = "/images/gallery/" + list[index];
    detail = '/projects/thebadladns';
  }
  
  res.render('index', { image: img, desc: gallery[img], detail: detail});
});

router.get("/about/crljmb", function(req, res, next) {
  res.render('about-crljmb', {});
});

router.get("/about", function(req, res, next) {
  var cards = [
    {
      name: 'Rafa de la Hoz',
      img: '/images/thegraffo.png', img_alt: '/images/thegraffo-alt.png',
      social: '<a href="https://twitter.com/thegraffo">@thegraffo</a>',
      traits: ['Creative extraordinaire', 'Scholar of game design', 'Likes weird things']
    },
    {
      name: 'Carlos Jambrina',
      img: '/images/crljmb.png', img_alt: '/images/crljmb-alt.png',
      social: '<a href="https://twitter.com/crljmb">@crljmb</a>',
      traits: ['Illustrateur magnificient', 'Technically wonderful', 'Eats really healthy']
    },
  ];
  cards.sort((a, b) => {
    var rand = Math.random();
    if (rand < 0.33) return -1;
    else if (rand < 0.66) return 0;
    else return 1;
  });
  res.render('about', {title: "About the Badladns", cards: cards});
});

module.exports = router;
