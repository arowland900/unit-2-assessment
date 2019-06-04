var express = require('express');
var router = express.Router();
var todos = [{
  value: 'feed cat',
  completed: false
},
{
  value: 'wash face',
  completed: false
},
{
  value: 'make dinner',
  completed: false
},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', todos });
});

router.post('/', function(req, res, next) {
  todos.push(req.body)
  res.redirect('/');
});

module.exports = router;
