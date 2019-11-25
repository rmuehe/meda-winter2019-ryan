// REFER TO : meda11819.txt
// REFER TO Users/student/Documents/"Git Repositories"/meda-winter2019-ryan/practice/express/requests/client/index.html

// EXPRESS SERVER BEGIN

// Include fs, express, body-parser
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
// create an express.js server object
const app = express();

// calling the Server on the http package: supplying express to http
// Includes the http package and attach the express server object to the http object
const http = require("http").Server(app);
// create a avariable that will hold the port number...
const port = 8080;
// pass the port variable to the listen function for the HTTP server
http.listen(port);
console.log(`Express server running on port: ${port}`);

// All this to make JSON readable, including bodyparser package declared above
// Needed to read data sent through POST request
app.use(bodyParser.json());
// part of http request, encoded or not
// gives bodyparser specific options to run off of.
app.use(bodyParser.urlencoded({extended:false}));
// EXPRESS SERVER END

// Custom code for Express.js after this line.

/////////// ROUTES ///////////// 
/*
- provide static files
- load into the client's browser
- tell them to load the files in the client folder
*/
// Can have as many app.use() methods as you want
app.use("/", express.static("client/"));

//app.post("/route", (request, response) => {});
// request: object of details, url, times, etc
// response: 

// localhost:8080/submitComment is a GET request

// .use is for static files
// what is .get for then?

// setting the route name with an AJAX call
// don't see the "/submitComment in the search bar
// just for AJAX

// 2nd argument is fired when request goes through
// request is the signal sent from jQuery to Express
// -- from Express's perspective, it's a request.

// AN HTTP Post Handler called updateData
// 1st arg: is HTTP POST route path, s2nd arg is the callb fun, 
//the callb func will run every time someone requests the /submitComment Post handler
// Callb Func parameters: request holds the object that was sent to us through the internet,
// the response holds a reference of where to send the response to (like an IP address).
app.post("/submitComment", (request, response) => {

    // Rename the data sent to us (located in request.body) 
    // to something simpler like objectFromRequest
    let objectFromRequest = request.body;
    // console.log(objectFromRequest.yah)
    console.log(objectFromRequest);

    // console.log(objectFromRequest.comment);

    // console.log(request.body.yah);
    console.log(request.body.comment);

    // If the file exists do...
    if (fs.existsSync("commentHistory.json")) {
        // ...read the file and store the contents in the variable comments...
       let comments = fs.readFileSync("commentHistory.json", "utf8");
       //... parse the JSON and reuse the same comments variable...
       comments = JSON.parse(comments);
       // ...add the new objectFromRequest object to the array inside of the comments object
       comments.commentsArr.push(objectFromRequest);
       // ...then convert comments back into a string as JSON...
       comments = JSON.stringify(comments);
       // ...finally save the JSON string to a file
       fs.writeFileSync("commentHistory.json", comments, "utf8");
       console.log("New comment saved to hard drive");
    } else {
        // If the file doesnt exist...
        // ...we prebuild the object 
        //( which includes the comment we received) to save as JSON
        let comments = {commentsArr : [objectFromRequest]}; 
        // ...Convert it to actual JSON string
        comments = JSON.stringify(comments);
        // ...Finally save JSON string to a new file
        fs.writeFileSync("commentHistory.json", comments, "utf8");
        console.log("No comment file found. New file saved to hard drive");
    }
    // If you don't want to send any data, then use
    //response.sendStatus(200);
    // You can only use sendStatus or send once to fulfill front-end request.

    let data = {text: "Thanks for the abuse"};

    /*
    // let text = objectFromRequest.yah;
    let text = objectFromRequest.comment;

    console.log("We received a request for updateData" + text);
    */

    // if sending data, automatically tells server "200"
    
    // response.send(data);

    
    // if you're not sending data, need to send:
     response.sendStatus(200);
});

// get is better if post doesn't use the request parameter

// a second HTTP POst Handler called /loadComments
app.post("/loadComments", (request, response) => {

    // check if JSON file exists...
    if (fs.existsSync("commentHistory.json")) {

        // ...If it exits then read it...
        let comments = fs.readFileSync("commentHistory.json", "utf8");
        // ...and convert it to a JS Object...
        comments = JSON.parse(comments);
        // ... finally send it to the requester
        response.send(comments);
    } else {
        // ...If it doesn't exist, then send an error 500 to the requester.
        response.sendStatus(500); // lazy way, better to figure out what went wrong
        // "self-healing" is better, otherwise ppl will send a bug report
        // "self-healing" here is : write the file than send the empty file back..
    }
});

