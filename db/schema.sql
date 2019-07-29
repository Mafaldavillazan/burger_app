--------------ONLY------------------
--- check the db is not created -----
DROP DATABASE IF EXISTS burgers_db;

----------- create db ------------
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(30) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
