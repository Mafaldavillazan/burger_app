//Require MYSQL connection
var connection = require("../config/connection.js");

var orm = {
    //select all the burgers
    selectAll: function(tableBurgers, cb) {
      var queryString = "SELECT * FROM ??;";
      connection.query(queryString, [tableBurgers], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result)
      });
    },

    //nsert an input into the database
    insertOne: function(tableBurgers, cols, vals, cb) {
      var queryString = "INSERT INTO ?? (??) VALUES (?) ;";
      console.log(queryString);
      connection.query(queryString, [tableBurgers, cols, vals], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result)
      });
    },



    updateOne: function(tableBurgers, cols, boleanchange, cb) {
      var queryString =
        "UPDATE ?? SET ? WHERE id = ";
      connection.query(
        queryString,
        [tableBurgers, cols, boleanchange],
        function(err, result) {
          if (err) throw err;
          console.log(result);
          cb(result)
        }

      );
    }
  };
  
  module.exports = orm;
  
