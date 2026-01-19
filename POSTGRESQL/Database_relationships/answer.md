Database Relationship:
- A database relationship defines how two or more tables in a relational database are logically connected using primary keys and foreign keys.
- Relationships help organize data efficiently, reduce duplication, maintain data integrity, and allow meaningful data retrieval across multiple tables.
- In an e-commerce application, database relationships connect entities such as customers, products, orders, payments, and reviews to reflect real-world business operations.

Types of Database Relationships:
- There are three main types of database relationships:
1. One-to-One (1:1)
2. One-to-Many (1:N)
3. Many-to-Many (M:N)

1. One-to-One Relationship:
- In a one-to-one relationship, each record in one table is associated with exactly one record in another table, and vice versa.
- E-Commerce Example:
- User ↔ User Profile
- One user has only one profile
- One profile belongs to only one user

2. One-to-Many Relationship:
- In a one-to-many relationship, one record in the parent table can be related to multiple records in the child table, but each child record relates to only one parent.
- E-Commerce Example:
- Customer ↔ Orders
- One customer can place many orders
- Each order belongs to one customer

3. Many-to-Many Relationship:
- In a many-to-many relationship, multiple records in one table can be associated with multiple records in another table.
- E-Commerce Example:
- Orders ↔ Products
- One order can contain many products
- One product can appear in many orders
