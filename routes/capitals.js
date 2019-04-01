var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();


router.get('/', function(req, res, next) {
    fs.readFile(path.normalize(__dirname + '/../jsonFiles/canada_capitals.json'), function(err, data){
        var contactArr = JSON.parse(data);
        res.render('capitals', {contactArr : contactArr});
    });
  });

/* GET users listing. 
router.get('/', function(req, res, next) {
    res.send('This is from the users partial ');
});
*/
module.exports = router;
