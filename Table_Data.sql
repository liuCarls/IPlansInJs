CREATE DATABASE IF NOT EXISTS wserp;
drop table Plans;
create table plans(
 plan_id int primary key auto_increment,
 plan_name char(20),
 plan_type int, -- 0,全不支持，1 Standard 2 Premium 3 All
  createdAt DATE,
  updatedAt DATE
)
insert into plans values(1,'General', 3, now(),now());
insert into plans values(2,'Specialist',2, now(),now());
insert into plans values(3,'Physiotherapy',3, now(),now());