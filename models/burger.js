var orm = require("./../config/orm.js");
var burger;

burger = {
    all: function(cb){
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    devoured: function(id, cb){
        console.log("burger id: ");
        console.log(id);
        orm.eatOne(id, function(res) {
            cb(res);
        });
    },
    create: function(name, cb){
        console.log("burger name: ");
        console.log(name);
        orm.createOne(name, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;