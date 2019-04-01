var express = require('express');
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile(path.normalize(__dirname + '/../jsonFiles/ten_most_populated_countries.json'));
});

module.exports = router;
