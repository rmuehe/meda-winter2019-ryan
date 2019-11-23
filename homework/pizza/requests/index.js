// Include into our code, the FS package (builtin)
const fs = require("fs");
// Includes into our code, the Express.js, provided by NPM.
const express = require("express");
// Includes into our code Body Parser, comes with Express.js
const bodyParser = require("body-parser");
// Create an Express.js server object.
const app = express();
// Includes the HTTP package (builtin), and we attach our Express.js server object to the HTTP object.
const http = require("http").Server(app);
// We create a variable that will hold the port number we want to use.
const port = 3000;
// We pass the port variable to the listen function for the HTTP server.
http.listen(port);

// Signifying the Developer that Express.js is now running.
console.log("Express server running on port " + port);

// Needed to read data sent through POST request.
app.use(bodyParser.json());
// Gives Body Parser specific options to run off of.
app.use(bodyParser.urlencoded({extended: false}));

// Custom Code for Express.js after this line.

// Variable to make sure the file name is the same every time.
let filename = "commentHistory.json";

// Routes
// First Argument is the route name, second argument is directory to load when someone requests the route name.
app.use("/", express.static("client/"));

// An HTTP Post Handler called /submitComment.
// First argument is HTTP Post route name, second argument is the callback function. The callback function will run every time someone requests the /submitComment Post handler.
// Callback function parameters: request holds the object that was sent to us through the Internet, the response object holds a reference of where to send the response to (like IP address).
app.post("/submitComment", (request, response) => {

    // Rename the data sent to us (located in request.body) to something simpler like objectFromRequest.
    let objectFromRequest = request.body;
    
    console.log(objectFromRequest);

    // let text = objectFromRequest.message;
    // console.log("We recieved a request for/submitComment: " + text);


    // If the file exists do...
    if (fs.existsSync(filename)) {
        // ...read the file and store the contents in the variable comments...
        let comments = fs.readFileSync(filename, "utf8");
        // ...parse the JSON and reuse the same comments variable...
        comments = JSON.parse(comments);
        // ...add the new objectFromRequest object to the array inside of the comments object...
        comments.commentsArray.push(objectFromRequest);
        // ...then convert comments back into a string as JSON...
        comments = JSON.stringify(comments);
        // ...finally save the JSON string to a file.
        fs.writeFileSync(filename, comments, "utf8");
        console.log("New Comment Saved to Hard Drive!");
    } else {
        // If the file doesn't exists...
        // ...We prebuild the object (which includes the comment we just recieve) to save as JSON...
        let comments = {
            commentsArray: [objectFromRequest]
        };
        // ...Convert it actual JSON String...
        comments = JSON.stringify(comments);
        // ...Finally save JSON string to new File.
        fs.writeFileSync(filename, comments, "utf8");
        console.log("Note: No Save File Detected, creating New File. New Comment Saved to Hard Drive!");
    }

    // {commentsArray: []}


    // If you don't want to send any data back, you can use .sendStatus(). You can only use sendStatus or send once to "fulfill" front-end request.
    response.sendStatus(200);
});

// A second HTTP Post Handler called /loadComments
app.post("/loadComments", (request, response) => {

    // Check if the JSON file exists...
    if (fs.existsSync(filename)) {
        
        // ...If it exists then read it...
        let comments = fs.readFileSync(filename, "utf8");
        // ...and convert to a JavaScript Object...
        comments = JSON.parse(comments);
        // ...finally send it to the requester.
        response.send(comments);
    } else {
        // ...If it doesn't exist, then send an error 500 to the requester.
        response.sendStatus(500);
    }

});