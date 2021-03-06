//Require Express
var express = require("express");
var router = express.Router();

// Require the burger model
var burger = require("../models/burger.js");

//---------------------------------
//           ROUTERS
//---------------------------------

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function (result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    
    console.log("req.params.id")
    console.log(req.params.id)

    //burger.updateOne({devoured: req.body.devoured}, {id: req.params.id}, function (result) {
    burger.updateOne({devoured: 1}, {id: req.params.id}, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;

