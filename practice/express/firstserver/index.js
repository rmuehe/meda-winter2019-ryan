// Use the Express package
const express = require("express");
// the above is a huge function that needs to be run 
// on the next line
const app = express();
// FEEDING THE http INTO THE EXPRESS SERVER
const http = require("http").Server(app);
// http requests: messages or signals

// port for ftp, webpages, mail...
// normal port for webpage: 80
// -- can't use without restricting access while developing
// most common port for web dev : 8080 (semantic convention)
// 3000 is the default Node port


const port = 8080;
http.listen(port);
// method that listens to the given port...

console.log(`The express server is running on port: ${port}`);

// when requesting: this is called "routing"
// ways that your server handles requests
// can have multiple routes

// EXPRESS ROUTES

// call the express server
// using a folder as a route web folder
app.use("/client", express.static("./webfiles/"));
// app.use("/profile", express.static("./user/"));

// http://yourserver/subfolder/index.html

// http://localhost:8080/client -> Gets sent to -> webfiles folder

// ** need to introduce the package "nodemon"

// Can have another terminal open while 
// server is running in a seprate terminal window

app.use("/myproject", express.static("../../../../meda-winter2019-eduardo/projects/htmlGenerator"));









