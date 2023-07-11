show databases;
use holamundo;
CREATE TABLE services (
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
select * from servicios where name like "Corte%";
select * from servicios where name like "%Lavado%";
select concat(name," ",surname) as full_name from reservations;
select * from reservations where concat(name," ",surname) like "%Ana Preciado%";

use ejercicio1;
create table clientes (
    id int(11) not null auto_increment,
    name varchar(60) not null,
    surname varchar(60) not null,
    phone varchar(10) not null unique,
    email varchar(30) not null unique,
    primary key (id)
);
create table citas (
    id int(11) not null auto_increment,
    date date not null,
    time time not null,
    clientId int(11) not null,
    primary key (id),
    key clientId (clientId),
    constraint client_FK foreign key (clientId) references clientes (id)
);
select * from citas inner join clientes on clientes.id = citas.clientId;
create table citasServicios (
    id int(11) auto_increment,
    citaId int(11) not null,
    servicioId int(11) not null,
    primary key (id),
    key clientId (citaId),
    constraint citas_FK foreign key (citaId) references citas (id),
    key servicioId (servicioId),
    constraint servicio_FK foreign key (servicioId) references services (id)
);

select * from citasServicios 
left join citas on citas.id = citasServicios.citaId
left join services on services.id = citasServicios.servicioId;

select * from citasServicios
left join citas on citas.id = citasServicios.citaId
left join clientes on citas.clientId = clientes.id
left join services on services.id = citasServicios.servicioId;