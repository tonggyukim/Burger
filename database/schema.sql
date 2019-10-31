create database if not exists burgers_db;
use burgers_db;

create table burgers (
	id int not null auto_increment,
    burger_name varchar(250) not null,
    devoured bool default false, 
    primary key (id)
);

