//Require MYSQL connection
var connection = require("../config/connection.js");

var orm = {
    //select all the burgers
    selectAll: function(tableBurgers,cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableBurgers], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result)
      });
    },

    //Insert an input into the database
    insertOne: function(tableBurgers, burgerInsert,cb) {
      var queryString = "INSERT INTO ?? SET ?";
      console.log(queryString);
      connection.query(queryString, [tableBurgers, {burger_type: burgerInsert}], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result)
      });
    },


    updateOne: function(tableBurgers, burgerUpdate, boleanchange,cb) {
      var queryString =
        "UPDATE ?? SET ? WHERE ?";
  
      connection.query(
        queryString,
        [tableBurgers, {devoured: boleanchange}, burgerUpdate],
        function(err, result) {
          if (err) throw err;
          console.log(result);
          cb(result)
        }

      );
    }
  };
  
  module.exports = orm;
  
