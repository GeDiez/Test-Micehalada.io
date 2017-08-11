set search_path to micheladaTest;
create table "micheladaTest".product(
id bigserial primary key,
name varchar(50) not null,
"desc" varchar(50) not null,
brand varchar(50) not null,
price integer not null
);

create table "micheladaTest".brand(
id bigserial primary key,
name varchar(50)
)