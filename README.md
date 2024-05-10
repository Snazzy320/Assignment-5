//steps involved in setting up a Node.js server from scratch

// 1. Install Node.js 
// a) To install Visit the official Node.js website (https://nodejs.org) and download the latest or compatable version of Node.js.
// b) Open the downloaded file and Follow the installation instructions

// 2. initializing a new project
// a) Create a Project Directory this can be done by Choosing or creating a directory where you want to store your Node.js project
// b) open the terminal or command  prompt and navigate to this directory

// 3) installing necessary packages
// i) Install package.jason file 
// a) To install Package.jason file type npm init -y or --yes (This will create a package.json file, which will store information about your project and its dependencies)

// 4) Install your Dependencies 
// i) Express (type npm install express)
// ii) Nodemon (type npm install nodemon -d) Nodemon is installed a devdependency because it is needed only during the development process, but not during the runtime or production phase of the application.
//iii) Dotenv (type npm i dotenv)

//5)  Create a .env File:
//a) Create a .env file in your project directory to store environment variables.
//b) Add any environment variables you need, such as port number. For example PORT=8000

// 6) Create Your Server File that will contain the code to set up and run your Node.js server.
// a) Create a new JavaScript file (e.g., server.js) in your project directory.

//7) Write Your Server Code as follow: 

// a) Require Necessary Modules
// eg.  const express = require('express');
//b) create an instance of the Express application by calling express() function
// eg. const app = express();
//c) Define routes and middleware functions to handle incoming requests
//eg. app.get('/', (req, res) => {
//   res.send('Welcome to my Backend');
//   });

//8) Start the Server and Listen for Incoming Requests:
// const port = 3000; // Specify the port number
// app.listen(port, () => {
// console.log(`Server is listening at ${port}`);
// });

//Putting all together we will have this 
const express = require('express')
const dotenv = require("dotenv")
dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000 

app.listen(PORT, ()=>{
    console.log("Server started Running...")
})

// 9) Update package.json:
//a) Add a start script and dev script in your package.json file to run the server using nodemond.
//e.g "scripts": {
//   "start": "node index.js",
//   "dev": "nodemon index.js"
//  }

//10) Run Your Server:
//a) Save your server.js file.
//b) In your terminal or command prompt, navigate to your project directory.
//c) Run the following npm start command ie npm start 




//What is the purpose of using a package like express in setting up a server?

//The purpose of using express is to simplify and streamline the process of building web applications in Node.js. 
//Express is a lightweight and flexible web application framework for Node.js, designed to simplify the process of building web and mobile applications. 
//It provides a robust set of features, including routing, middleware, template engines, static file serving, and error handling. 
//With its minimalistic design and vibrant ecosystem, Express enables developers to create powerful server-side applications and APIs with ease, abstracting away many of the complexities of handling HTTP requests and responses.


// What is nodemon and how does it aid in the development process?

//Nodemon is a utility for Node.js that aids in the development process by automatically restarting the server whenever changes are detected in the source code. 
//It monitors files in the project directory for changes, such as modifications, additions, or deletions, and then restarts the Node.js application accordingly.

//Nodemon aids in the development process in the following ways 

//1) Automatic Restart: Nodemon eliminates the need to manually stop and restart the server every time a change is made to the source code.
//2) Improved Workflow: With Nodemon, developers can focus on writing code without interruptions. They can make changes to the code, save the files, and see the results immediately without having to manually restart the server or reload the application.
//3) Faster Feedback Loop: Nodemon speeds up the feedback loop by providing instant feedback on code changes. Developers can quickly iterate on their code, test new features, and debug issues without waiting for the server to restart manually.
//4) Integration with Build Tools: Nodemon integrates seamlessly with build tools and development workflows. 


//Explain its significance in a Node.js project?
//The significance of Nodemon in a Node.js project lies in its ability to enhance the development workflow and improve developer productivity by monitorings the files in a Node.js project for changes and automatically restartings the server whenever modifications are detected.
