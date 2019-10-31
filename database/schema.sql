create database if not exists burgers_db;
use burgers_db;

create table burgers (
	id int not null auto_increment,
    burger_name varchar(250) not null,
    devoured bool default false, 
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    primary key (id)
);

