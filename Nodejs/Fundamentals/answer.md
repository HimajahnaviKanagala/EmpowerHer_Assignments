Q1. Role of Frontend (FE)
- The Frontend is the part of a web application that users directly see and interact with in their browser.
➡️ User Interface:
- Responsible for the visual layout and design of the application
- Includes the elements like buttons, forms, navigation menus, images, and text.
- Built using technologies such as HTML, CSS, and JS & frameworks like React.
➡️ User Interaction:
- Handles user actions such as clicks, typing, scrolling and form submissions.
- Provides instant feedback
- Improves user experience (UX) 
➡️ Communication with Backend:
- Sends requests to the backend using APIs
- Receives data from backend and displayes it to the user.
- Doesn't direcly access the database

Q2. Role of Backend (BE)
- The Backend is the server-side part of a web application but handles logic, data and security.
➡️ Server-Side Processing:
- Processes requests received from the frontend.
- Executes business logic and perform calculations.
- Generates responses to send back to the frontend.
➡️ Database Handling:
- Stores, retrieves, updates, and deletes data in databases.
- Works with databases such as MySQL, PosthreSQL, MongoDB, etc.
- Ensures data consistency and integrity.
➡️ Security and Authentication:
- Handles user authentication.
- Manages authorization
- Protects data using encryption, validation, and secure protocols.

Q3. Business Logic
- Business Logic refers to the rules and decision-making processes that define how a business operates within a web application.
- It determines what should happen when certain actions occur.
- Lies between the user interface and the database.
- Ensures that business rules are followed correctly and consistently.
Real-World Examples
1. E-commerce Website
- Applying discounts only if a coupon is valid.
- Calculating final price including tax and shipping.
- Preventing checkout if items are out of stock.
2. Banking Application
- Allowing money transfer only if account balance is sufficient.
- Setting daily transaction limits.
- Calculating intrest on savings account.
3. Online Learning Platform
- Granting course access only after payment.
- Tracking course completion percentage.
- Issuing certificates only if all lessons are completed.

Q4. Client-Server Model
- The Client-Server Model is an architecture where tasks are divided between service requests (clients) and service providers (servers).
➡️ Who is the Client:
- The Client is the user's device or application(e,g., web browser, mobile app).
- It sends requests and displays responses.
- Examples: Chrome browser, mobile apps.
➡️ Who is the Server:
- The server is a powerful machine or sysytem that processes requests.
- It contains backend logic and databases.
- Sends data or services back to the client.
➡️ How Communication Happens:
- Communication occurs over a network using protocols like HTTP/HTTPS.
- Client sends a request ➡️ Server processes it ➡️ Server sends a response.
- Data is usually exchanges in JSON format.

Q5. Three-Tier Architecture
- 3-Tier Architecture divides a web application into 3 separate layers for better organization and scalability.
1. Presentation Layer
- The frontend of the application.
- Displays data to users and collects input.
- Technologies: HTML, CSS, JS, frontend frameworks.
2. Application (Business) Layer
- Contain business logic and rules.
- Processes data received from the presentation layer.
- Communicates with data layer.
- Implemented using backend technologies like Node.js, Java, Python.
3. Data Layer
- Manages data storage and retrieval.
- Includes databases and data access logic.
- Ensures data security and integrity. 
➡️ Why This Artitecture is Used
- Better separation of concerns.
- Easier maintenance and scalability.
- Improved security and flexibility.
- Allows teams to work on different layers independently.

Q6. JavaScript as a Backend Language
- JavaScript is widely used as a backend language, mainly due to Node.js
➡️ Performance:
- Uses an event-driven, non-blocking I/O model.
- Handles multiple requests efficiently.
- Suitable for real-time applications like chats and streaming.
➡️ Ecosystem:
- Large package ecosystem via npm (Node Package Manager).
- Thousands of libraries for databases, security, APIs, and testing.
- Same language can be used for both frontend and backend
➡️ Popular Backend Frameworks
- Express.js - Lighweight and flexible.
- NestJS     - Structured and scalable framework.
- Fastify    - High-performance backend framework.
- Koa.js     - Minimal and modern backend framework.
