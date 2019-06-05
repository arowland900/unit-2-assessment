var express = require('express');
var router = express.Router();
var todos = require('../data/todos')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', todos });
});

router.post('/', function(req, res, next) {
  todos.push(req.body)
  res.redirect('/');
});

router.delete('/:idx', function(req, res, next) {
  console.log(req.params.idx)
  todos.splice(req.params.idx, 1)
  res.redirect('/');
});

module.exports = router;
