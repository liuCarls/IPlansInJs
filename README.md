# IPlansInJs
One Test project 

#Database
1 install mysql 
2 create database:
  CREATE DATABASE IF NOT EXISTS wserp;
3 create table 
  create table plans(
   plan_id int primary key auto_increment,
   plan_name char(20),
   plan_type int, -- 0,全不支持，1 Standard 2 Premium 3 All
    createdAt DATE,
    updatedAt DATE
  )
4 add testing data
  insert into plans values(1,'General', 3, now(),now());
  insert into plans values(2,'Specialist',2, now(),now());
  insert into plans values(3,'Physiotherapy',3, now(),now());

#Backend
  Access the api directory，and can run the following command to start the service
  >nodemon server.js
  
#Frontend
  Access the client directory，and can run the following command to start the service
  >npm start
  
If you are run Backend and Frontend application first, you must install first.
  >npm install
