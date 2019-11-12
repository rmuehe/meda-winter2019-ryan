// REFER TO : meda11819.txt
// REFER TO Users/student/Documents/"Git Repositories"/meda-winter2019-ryan/practice/express/requests/client/index.html

// EXPRESS SERVER BEGIN
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// calling the Server on the http package: supplying express to http
const http = require("http").Server(app);
const port = 8080;
http.listen(port);
console.log(`Express server running on port: ${port}`);

// All this to make JSON readable, including bodyparser package declared above
// Needed to read data sent through POST request
app.use(bodyParser.json());
// part of http request, encoded or not
app.use(bodyParser.urlencoded({extended:false}));
// EXPRESS SERVER END

// Custom code for Express.js after this line.

/////////// ROUTES ///////////// 
/*
- provide static files
- load into the client's browser
- tell them to load the files in the client folder
*/

app.use("/", express.static("client/"));

//app.post("/route", (request, response) => {});
// request: object of details, url, times, etc
// response: 

// localhost:8080/updateData is a GET request

// .use is for static files
// what is .get for then?

// setting the route name with an AJAX call
// don't see the "/updateData" in the search bar
// just for AJAX

// 2nd argument is fired when request goes through
// request is the signal sent from jQuery to Express
// -- from Express's perspective, it's a request.

app.post("/updateData", (request, response) => {

    let objectFromRequest = request.body;
    // console.log(objectFromRequest.yah)
    console.log(objectFromRequest);

    // console.log(objectFromRequest.comment);

    // console.log(request.body.yah);
    console.log(request.body.comment);

    if (fs.existsSync("commentHistory.json")) {
       let comments = fs.readFileSync("commentHistory.json", "utf8");
       comments = JSON.parse(comments);
       comments.commentsArr.push(objectFromRequest);
       comments = JSON.stringify(comments);
       fs.writeFileSync("commentHistory.json", comments, "utf8");
       console.log("New comment saved to hard drive");
    } else {
        let comments = {commentsArr : [objectFromRequest]}; 
        comments = JSON.stringify(comments);
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
    response.send(data);

    
    // if you're not sending data, need to send:
    // response.sendStatus(200);
});

