show databases;
use holamundo;
CREATE TABLE reservations (
	id int(12) not null auto_increment,
    name varchar(64) not null,
    price decimal(6,2) not null,
    primary key (id)
);
show Tables;
describe services;
insert into services (name, price) values ("Paseo perros", 15), ("Netflix", 15.99);
select * from services;
select id, name, price from services order by price asc limit 3;
select * from services where price <= 20;
update services set price = 70 where id = 2;
delete from services where id = 5;
alter table services add description varchar (255) not null;
alter table services change description description2 varchar(225) not null;
drop table colours;

CREATE TABLE reservations (
	id int(12) not null auto_increment,
    name varchar(64) not null,
    surname varchar(64) not null,
    time time default null,
    date date default null,
    services varchar(255) Not null,
    primary key (id)
);

select count(id), date from reservations group by date order by count(id) desc;
select sum(price) as totalService from servicios;
