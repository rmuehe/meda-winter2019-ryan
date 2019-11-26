// Include into our code, the FS package (builtin)

// FS COMMENTED OUT
// const fs = require("fs");

// Includes into our code the Mongoose.js package.
const mongoose = require("mongoose");
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

// URL to access our MongoDB database.
const dbConnect = "mongodb+srv://commentsProjectUser:BaloneyIsReal@cluster0-4gzsy.mongodb.net/commentsproject?retryWrites=true&w=majority"
// Additional options when connecting with MongoDB.
const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true  //bug with this where can't log in with multiple users on the same IP
};

mongoose.connect(dbConnect, options, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successfully connected to MongoDB Atlas");
    }
});

// link up MongoDB error with the console 
// and link up the definitions of Promises to Mongoose.
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB error: "));
// Tell mongoose what a Promise is by providing the class to it.
mongoose.Promise = global.Promise;

// Building Mongoose Schema
let Schema = mongoose.Schema;
let commentsSchema = new Schema ({
    message: String,
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
    timestamp: Date
});


// allows save, find, findById, findByIdAndDelete
// Create a Model for the comments collection using the comments Schema.
let commentsModel = new mongoose.model("comments", commentsSchema);

// Signifying the Developer that Express.js is now running.
console.log("Express server running on port " + port);

// Needed to read data sent through POST request.
app.use(bodyParser.json());
// Gives Body Parser specific options to run off of.
app.use(bodyParser.urlencoded({extended: false}));

// Custom Code for Express.js after this line.

// Variable to make sure the file name is the same every time.
// FS COMMENTED OUT
// let filename = "commentHistory.json";

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

    // TODO: handle the NaN case where user doesnt input a number
    objectFromRequest.age = parseInt(objectFromRequest.age);
    objectFromRequest.timestamp = new Date();

    let newComment = new commentsModel(objectFromRequest);
    newComment.save((error) => {
            // need to handle for the error
            if (error) {
                console.log("There was an error " + error);
            } else {
                console.log("Saved a new comment to the database");
            }
    });
});
    // let text = objectFromRequest.message;
    // console.log("We recieved a request for/submitComment: " + text);


// FS COMMENTED OUT
/*
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
*/


// A second HTTP Post Handler called /loadComments
app.post("/loadComments", (request, response) => {

    commentsModel.find({}, (error, results) => {
        if (error) {
            // If error, tell me about it.
            console.log(error);
        } else {
            // Build an object that the front-end expects...
            let objectToSend = {
                commentsArray: results
            };
            response.send(objectToSend);
        }
    });
});
// FS COMMENTED OUT
/*
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

*/