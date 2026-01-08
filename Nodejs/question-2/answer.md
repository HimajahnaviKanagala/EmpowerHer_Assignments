a. Package Managers

What is a package manager?
- A package manager is a tool that helps developers install, update, remove, and manage software libraries used in an application. These packages are reusable pieces of code written by other developers that add specific functionality to a project.

Why do we need package managers in backend development?
- Backend applications depend on many external libraries for:
  - Server creation
  - Database connectivity
  - Authentication
  - Security
  - Logging
  - Performance optimization
- A package manager:
  - Automatically downloads required libraries
  - Manages correct versions
  - Handles dependencies of dependencies
  - Saves time and reduces manual errors

  Problems faced if package managers are not used:
  - Without a package manager:
    - Developers must manually download and include libraries
    - Version mismatches can break the application
    - Hard to track which libraries are used
    - Difficult to update or remove dependencies
    - Team collaboration becomes error-prone
    - Deployment becomes inconsistent across environments

    b. NPM (Node Package Manager)

    What is NPM?
    - NPM is the default package manager for Node.js. It consists of an online registry of js packages, a command-line tool to manage packages.

    Why is NPM important for Node.js applications?
    - Node.js applications heavily rely on third-party packages.
    - NPM provides access to millions of ready-to-use libraries.
    - Ensures consistent dependency management across development and production environments.
    - Makes project setup and maintenance easier.

    How NPM helps in managing dependencies:
    - Installs packages with a single command (npm install)
    - Tracks dependencies in package.json
    - Automatically installs required sub-dependencies
    - Locks exact versions using package-lock.json
    - Sepeartes development and production dependencies

    c. Backend Project Initialization

    What is the command used to initialize a backend (Node.js) project?
    - npm init

    Explain what npm init and npm init -y do:

    npm init:
    - Starts an interactive process, Asks questions like project name, version, Description, entry point.
    - Creates a package.json file based on answers.

    npm init -y:
    - Skips all questions, Uses default values, Quickly creates a package.json file, Commonly used in professional projects to save time.

    d. Files and Folders Created After Project Initialization

    package.json:
    - Purpose:
      - Acts as the configuration file of the Node.js Project.
      - Stores Project metadata, Scripts, Dependencies and devDependencies.
    - Importance:
      - Tell Node.js and NPM how the project works.
      - Required to install dependencies.
      - Essential for sharing the project with others.

    node_modules:
    - Purpose:
      - Contains all installed packages and their dependencies.
      - Created automatically when npm install is run.
    - Importance:
      - Required for the application to run locally.
      - Can be recreated anytime using package.json.

    package-lock.json:
    - Purpose:
      - Records the exact versions of installed packages.
      - Maintains a complete dependency tree.
    - Importance:
      - Ensures consistent installs across machines.
      - Prevents unexpected bugs caused by version updates.
      - Improves build reliability.

   Which files/folders should not be pushed to GitHub and why?
   node_modules:
   why?
   - Very large in size, can be regenerated using npm install, Makes repository heavy and slow.

   Which files must be committed and why?
   package.json:
   - Needed to understand project structure, Required to install dependencies.
   package-lock.json:
   - Ensures consistent dependency versions, Important for stable builds.



