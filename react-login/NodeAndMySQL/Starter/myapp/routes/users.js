var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("Hi Charlie, You're in!");
});

module.exports = router;
