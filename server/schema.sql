CREATE DATABASE cb;

USE cb;

CREATE TABLE rooms 
(
  id int auto_increment, 
  name varchar (140),
  PRIMARY KEY (id)
);

CREATE TABLE users 
(
  id int auto_increment, 
  name varchar (140),
  PRIMARY KEY (id)
); 

CREATE TABLE messages 
(
  id int auto_increment, 
  u_id int,
  r_id int,
  msg varchar (140),
  PRIMARY KEY (id),
  FOREIGN KEY (u_id) REFERENCES users(id),
  FOREIGN KEY (r_id) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/* 
To start: 
 - npm install
 - mysql.server start 
 - mysqladmin -u root password (create root user and password)
 - mysql -u root -p < server/schema.sql (create schema)
 - mysql -u root -p (confirm shcema creation)
 - nodemon npm start
 - bower install










*/