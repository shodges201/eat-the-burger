var connection = require('./connection.js');

var orm = {
    selectAll: function(cb){
        console.log('select all');
        connection.query('SELECT * FROM burgers', function(err, data){
            if (err) {
                throw err;
              }
            cb(data);
        });
    },
    insertOne: function(){
        console.log("insert one");
    },
    eatOne: function(id, cb){
        console.log("update one");
        console.log(id);
        connection.query(`UPDATE burgers SET devoured=1 WHERE id=${id}`, function(err, data){
            if(err) throw err.stack;
            cb(data);
        });
    },
    createOne: function(name, cb){
        console.log("update one");
        console.log(name);
        connection.query(`INSERT INTO burgers(burger_name) VALUES('${name}');`, function(err, data){
            if(err) throw err.stack;
            cb(data);
        });
    }
}

module.exports = orm;