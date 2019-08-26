//  Require the orm page to start adding values
var orm = require("../config/orm.js");

//Linking orm with our app
var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },

    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },

    updateOne: function(booleanchange,  id, cb) {
      orm.updateOne("burgers", booleanchange, id, function(res) {
        cb(res);
      });
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;