var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "g8mh6ge01lu2z3n1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "cxrqjz1ngjwv1o0f",
    password: "d95eth04n1s2s4xr",
    database: "kwvwjp0nwugcqoxp"
  });
  
  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;
  