create extension if not exists "uuid-ossp";

create type user_role as enum(
  'ADMIN',
  'USER',
  'MANAGER'
);

create table userrs(
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text unique not null,
  password text not null,
  role user_role not null default 'USER',
  created_at timestamp default now()
);

select * from userrs;

create table products(
  name text not null,
  description text not null,
  mrp text not null
);
insert into products(name, description, mrp) values
('Product1', 'good product', 1000),
('Product2', 'good product', 2000),
('Product3', 'good product', 3000),
('Product4', 'good product', 4000)

select * from products;