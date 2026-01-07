1. Node.js Architecture
- Node.js is built to handle a large no.of client requests efficiently using an event-driven, non-blocking, asynchronous architecture. Instead of creating a new thread for every request, Node.js uses a single main thread along with background helpers to achieve high performance.

JavaScript Engine (V8):
- V8 is the JavaScript engine developed by Google.
- It executes JS code inside Node.js.
- Executes synchronous js code on the main thread.
- Allows Node.js to run outside the browser.
- Handles execution of js logic efficiently.

Node.js Core APIs:
- Buit-in modules provided by Node.js.
- Written mostly in C++ and JS.
- Examples:fs, http, path, crypto, events
- Provide functionality like file handling, networking, timers, and streams.
- Act as a bridge between JS code and lower-level system operations.

Native bindings:
- Native bindings connect JS code with C/C++ code inside Node.js.
- They allow JS to access system-level features.
- Enable high-performance operations.
- Used internally by Node.js core modules.
- Allow interation with libuv and OS resources.

Event Loop:
- The Event Loop is the heart of Node.js
- It continuously checks for pending tasks and executes them.
- Allow Node.js to remain non-blocking.
- Enables handling of thousands of concurrent requests.

2. libuv

What is libuv?
- libuv is a C library used by Node.js.
- It provides asynchronous I/O and cross-platform support.
- Originally developed for Node.js.

Why Node.js needs libuv:
- JavaScript itself cannot handle OS-level operations.
- Node.js needs a way to:
   - Access file systems
   - Perform networking
   - Handle timers
   - Manage threads
- libuv abstracts OS differences and provides async behavior.

Responsibilities of libuv:
- Managing the event loop
- Handling asynchronous I/O
- Maintaining the thread pool

3. Thread Pool

What is a thread pool?
- A thread pool is a collection of background threads.
- Used to handle blocking or CPU-intensive tasks

Why Node.js uses a thread pool:
- The main thread must stay free for event handling.
- Some operations are inherently blocking.
- Thread pool allows these operations to run in parallel without blocking the event loop.

Which operations are handled by the thread pool:
- File system operations (fs.readFile, fs.writeFile)
- Cryptography (crypto.pbkdf2, hashing)
- Compression (zlib)
- DNS lookups (non-network)

4. Worker Threads

What are worker threads?
- Worker threads allow running JS code in parallel threads.
- Introduced to handle CPU-heavy JS tasks.

Why are worker threads needed?
- Node.js main thread can be blocked by heavy computations.
- Worker threads prevent blocking the event loop.
- Improve performance for CPU-intensive workloads.

Difference between thread pool and worker threads
| Feature       | Thread Pool              | Worker Threads         |
| ------------- | ------------------------ | ---------------------- |
| Purpose       | System-level async tasks | CPU-intensive JS tasks |
| Code executed | C/C++ native code        | JavaScript code        |
| Managed by    | libuv                    | Node.js                |
| Use case      | I/O & crypto             | Heavy computations     |
| Data sharing  | Limited                  | Via shared memory      |

5. Event Loop Queues
- Node.js uses different queues to manage task execution order.

Macro Task Queue:
- Stores tasks scheduled for later execution.
- Also called the task queue.
- Examples: setTimeOut, setInterval

Micro Task Queue:
- Holds tasks that must run immediately after current execution.
- Has higher priority than macro tasks.
- Examples: Promise.then(), Promise.catch(), process.nextTick()

Execution priority between them:
- Synchronous code
- process.nextTick() (highest priority)
- Microtasks (Promises)
- Macro tasks (Timers, I/O)

Examples of tasks in each queue:

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");











