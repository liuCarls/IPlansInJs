# IPlansInJs
One Test project 

#Database
1 install mysql <br>
2 create database:<br>
  CREATE DATABASE IF NOT EXISTS wserp;<br>
3 create table <br>
  create table plans(<br>
   plan_id int primary key auto_increment,<br>
   plan_name char(20),<br>
   plan_type int, -- 0,全不支持，1 Standard 2 Premium 3 All<br>
    createdAt DATE,<br>
    updatedAt DATE<br>
  )<br>
4 add testing data<br>
  insert into plans values(1,'General', 3, now(),now());<br>
  insert into plans values(2,'Specialist',2, now(),now());<br>
  insert into plans values(3,'Physiotherapy',3, now(),now());<br>

#Backend
  Access the api directory，and can run the following command to start the service
  >nodemon server.js
  
  >APIs
  get all plans:  GET /plans <br>
  get plan by id: GET /plans/:id <br>
  create plan : POST /plans <br>
  delete plan by id:  DELETE /plans/:id <br>
  
#Frontend
  Access the client directory，and can run the following command to start the service
  >npm start
  
If you are run Backend and Frontend application first, you must install first.
  >npm install
