const messages = [
  {
    text: "Eggs",
    user: "Egg",
    date: new Date()
  },
  {
    text: "Anon is gay",
    user: "anon",
    date: new Date()
  },
  {
    text: "youre finally awake",
    user: "npc",
    date: new Date()
  }
];

var express = require('express');
var router = express.Router(); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

/*GET new message form*/
router.get('/new', function(req, res, next) {
  res.render('form', {title: 'Add message'});
}); 

/*POST message*/
router.post('/new', function(req, res, next) {
  let message = req.body.message;
  let author = req.body.author;
  let date = new Date();

  messages.push({text: message, user: author, date: date});

  res.redirect('/');
});

module.exports = router;
