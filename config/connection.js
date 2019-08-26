//---------------------------------
//          CONNECTION TO DB
//---------------------------------

//Requiring mysql
var mysql = require("mysql");
//Requiring process for security
// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
// }

// //Connection credentials, with security field
// var connection = mysql.createConnection(process.env.JAWSDB_URL || {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_SCHEMA
// });



var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db"
  })
}


// Make a connection (if not show problem)
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;