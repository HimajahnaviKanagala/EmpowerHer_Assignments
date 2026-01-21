Schema Design:
- Schema design is a fundamental step in building reliable and efficient relational databases. It defines how data is structured, stored, and protected before any application logic is written.

1. What schema design is and what a database schema represents?
- Schema design is the process of planning and organizing the structure of a database. It determines what tables exist, what columns they contain, how tables relate to each other, and what rules the data must follow.
A database schema is the formal blueprint of the database. It represents:
- Tables and their columns
- Data types of each column
- Relationships between tables (foreign key)
- Constraints and rules such as primary keys, uniqueness, and nullability
For example, a schema for a university database may include tables like Students, Courses, and Enrollments, along with rules that define how students enroll in courses.

2. Why schema design is required before writing backend code?
- Schema design must be done before backend development because the backend code depends entirely on how data is stored and accessed.
A well-designed schema:
- Gives developers a clear contract for how data should be read and written
- Prevents frequent database changes that would break backend logic
- Makes queries simpler and more efficient
If schema design is skipped or rushed, developers may need to constantly modify tables later, leading to bugs, performance issues, and rework across the entire application.

3. How poor schema design impacts data consistency, maintenance, and scalability
Poor schema design can cause serious long-term problems:
- Data Consistency: Duplicate or poorly structured data can lead to conflicting values
- Maintenance: Changes become difficult because the same information may exist in many places. Updating one value requires updating several tables.
- Scalability: As data grows, inefficient schemas result in slow queries, excessive storage use, and complex joins.
For example, storing customer details in every order row instead of a separate Customers table creates redundancy and inconsistency as the database grows.

4. What validations are in schema design and why databases enforce them
Validations are rules enforced by the database to ensure data accuracy and integrity. 
Common validations include:
- NOT NULL: Ensures a column must have a value (e.g., a user must have an email).
- UNIQUE: Prevents duplicate values (e.g., usernames or email addresses).
- DEFAULT: Assigns a default value if none is provided (e.g., account status = “active”).
- PRIMARY KEY: Uniquely identifies each row in a table.
Databases enforce validations so that invalid or inconsistent data cannot be stored, even if the backend application has bugs or fails to validate inputs properly.

5. Difference between a database schema and a database table
- A database schema is the overall structure or blueprint of the database.
- A database table is a single object within that schema that stores data in rows and columns.
In simple terms:
- The schema is the plan of the building
- The tables are the individual rooms inside it
A schema can contain many tables, views, indexes, and constraints.

6. Why a table should represent only one entity
Each table should represent one real-world entity or concept, such as User, Product, or Order.
This is important because:
- It avoids mixing unrelated data
- It reduces duplication
- It simplifies updates and queries
For example, combining user details and order details in one table makes the data hard to manage. Separating them into Users and Orders tables keeps responsibilities clear.

7. Why redundant or derived data should be avoided in table design
Redundant data is repeated information stored in multiple places, while derived data is data that can be calculated from existing values.
Storing such data should be avoided because:
- Redundancy increases storage usage
- It risks inconsistencies when values change
- Derived data can become outdated
For example, storing both date_of_birth and age is risky because age changes over time and can be calculated when needed.

8. Importance of choosing correct data types while designing tables
Choosing the correct data type ensures:
- Efficient storage
- Faster queries
- Accurate validation
For example:
- Use DATE for dates instead of strings
- Use INT for numeric values instead of VARCHAR
- Use appropriate sizes to avoid wasting space
Incorrect data types can cause performance issues, incorrect comparisons, and difficulty enforcing constraints.
