//  Require the orm page to start adding values
var orm = require("../config/orm.js");

//Linking orm with our app
var burger = {

    selectAll: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },

    insertOne: function(col, val, cb) {
      orm.create("burgers", col, val, function(res) {
        cb(res);
      });
    },
    updateOne: function(col, val, cb) {
      orm.update("burgers", col, val, function(res) {
        cb(res);
      });
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;