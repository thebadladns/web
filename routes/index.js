var express = require('express');
var router = express.Router();

const fs = require('fs');

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
  var list = fs.readdirSync("public/images/gallery");
  var index = Math.floor(Math.random() * list.length);
  var img = list[index];
  res.render('index', { image: "/images/gallery/" + img, desc: gallery[img]});
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
      name: 'Carlos Catalán',
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
  res.render('about', {cards: cards});
});

module.exports = router;
