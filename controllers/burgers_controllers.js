var express = require("express");
var burger = require('../models/burger.js');

var router = express.Router();


router.get("/", function(req, res) {
    burger.all(function(data){
        var hbsObject = {
            burgers: data
          };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.put('/eat', function(req, res){
    burger.devoured(req.body.id, function(data){
        let changed = data;
        console.log(changed);
        res.json(changed);
    });
});

router.post('/create', function(req, res){
    burger.create(req.body.name, function(data){
        let changed = data;
        console.log(changed);
        res.json(changed);
    })
})


module.exports = router;