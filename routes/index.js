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
  res.render('about', {});
});

module.exports = router;
