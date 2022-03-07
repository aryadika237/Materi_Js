var express = require('express');
var router = express.Router();

var connection = require('../library/database');

/* GET users listing. */
router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM users BY id desc', function (err, rows) {
    if (err) {
      req.flash('error', err)
      req.render('user', {
        data: ''
      });
    } else {
      res.render('users/index', {
        data: rows
      });
    }
  });
});

module.exports = router;
