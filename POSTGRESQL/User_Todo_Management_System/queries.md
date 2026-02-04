create extension if not exists "uuid-ossp";

create table users_todo(
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null unique,
  password text not null,
  created_at timestamp default now()
);

create table todos(
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  is_completed boolean default false,
  user_id uuid  not null references users_todo(id) on delete cascade,
  created_at timestamp default now()
);

select * from users_todo;

select * from todos;

