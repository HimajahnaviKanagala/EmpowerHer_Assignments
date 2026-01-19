1. Why is db.json not suitable as a database for real projects?
- db.json is a file-based storage system, usually used for learning, prototyping, or small mock applications. It is not suitable for real-world projects because of several limitations.

Limitations of file-based storage (db.json):

Performance
- Every read or write operation requires loading the entire file into memory.
- As data grows, operations become slow.
- Not optimized for complex queries or large datasets.

Scalability
- Cannot handle large amounts of data efficiently.
- Difficult to scale when users or records increase.
- No support for distributed or cloud-based scaling.

Reliability
- High risk of data corruption if the file is modified incorrectly.
- No built-in backup, recovery, or transaction support.
- If the file is deleted or damaged, data can be permanently lost.

Concurrency
- Multiple users accessing or writing to the file at the same time can cause conflicts.
- No proper locking or concurrency control.

2. What are the ideal characteristics of a database system (apart from just storage)?
- A good database system does much more than store data. It provides several important features:

- Key characteristics of an ideal database system:

Performance
- Fast data retrieval and updates.
- Optimized query execution even with large datasets.

Concurrency
- Supports multiple users accessing data at the same time.
- Prevents conflicts when many users read or write data simultaneously.

Reliability
- Ensures data is always available and consistent.
- Supports backups and recovery in case of system failure.

Data Integrity
- Ensures accuracy and consistency of data.
- Uses constraints like primary keys, foreign keys, and validations.

Scalability
- Can grow with increasing data and users.
- Supports vertical (more power) and horizontal (more servers) scaling.

Fault Tolerance
- Continues to work even if part of the system fails.
- Protects data against crashes, power failures, or hardware issues.

3. How many types of databases are there? What are their use cases or applications?
- Broadly, databases are classified into two main types:

1️⃣ Relational Databases (SQL Databases)
- Data is stored in tables with rows and columns.
- Uses structured schema and SQL queries.
- Enforces relationships using keys.

Examples:
- MySQL
- PostgreSQL
- Oracle
- SQL Server

Use Cases / Applications:
- Banking systems
- E-commerce applications
- School and university databases
- Inventory and order management systems

2️⃣ Non-Relational Databases (NoSQL Databases)
- Data is stored in flexible formats (documents, key-value, graphs).
- Schema-less or semi-structured.
- Designed for large-scale and distributed systems.

Examples:
- MongoDB (Document-based)
- Redis (Key-Value)
- Cassandra (Column-based)
- Neo4j (Graph-based)

Use Cases / Applications:
- Social media platforms
- Real-time analytics
- Big data applications
- IoT and sensor data
- Content management systems