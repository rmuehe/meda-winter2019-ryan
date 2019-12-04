// Use the mongoos, so we can  talk to MongoDB atlas
const mongoose = require("mongoose");

/*
For Security, put the credentials and password in a seperate folder
const redentials = require("./credentials");
const dbConnect = credentials.password;
*/

// must replace <password> with password, including angle brackets
// https://cloud.mongodb.com/v2/5dd6f4d279358e94ad2b08ef#clusters/connect?clusterId=Cluster0

// THe credentials and location to log into the MongoDB account.
// This should normally be somewhere else that's more secure.

// const dbConnect = "mongodb+srv://commentsProjectUser:BaloneyIsReal@cluster0-4gzsy.mongodb.net/test?retryWrites=true&w=majority"; 
const dbConnect = "mongodb+srv://practiceUser:BaloneyIsReal@cluster0-4gzsy.mongodb.net/test?retryWrites=true&w=majority"
// Additional options when connecting with MongoDB.
const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true  //bug with this where can't log in with multiple users on the same IP
};

// Actually connect to the MongoDB database. Attach the login credentials string and the options object.
mongoose.connect(dbConnect, options, (error) => {

    // When MongoDB server responds, test if an error was received.
    if (error) {
        console.log("Something happened connecting to the database! cannot connect.", error);    
    } else {
        // If no error, congratz!
        console.log("Successfully connected to MongoDB!");
    }
});

// store the object "connection", in a variable called db.
let db = mongoose.connection;

// mongoose.connection.on() may do more than handle errors...
// Hookup any MongoDB errors we receive to the console.
db.on("error", console.error.bind(console, "MongoDB connection error: "));

// Tell mongoose what a Promise is by providing the class to it.
mongoose.Promise = global.Promise;

// Finished connecting to mongoDB

// A schema for our database
let Schema = mongoose.Schema;

// Customize our Schema and name it practiceSchema
let practiceSchema = new Schema({
    // what are the documents going to hold?
    note: String,
    old: Boolean,
    timesUpdated: Number,
    city: String
    // consider these like columns with these values
});

// Create a model: what a collection looks like
// Create a new Model that has the Schema and the collections of the information.
let practiceModel = new mongoose.model("myfirstcollections"/*"collectionName"*/, practiceSchema/*the Schema*/);


// CREATE
// let newEntry = new practiceModel({
//     note: `This is my first note on the db`,
//     old: false,
//     timesUpdated: 1
// });

function newDocument (num) {
    
        let someBool = true;
        return newEntry = new practiceModel({
            note: `This is my #${num} note on the db`,
            old: num % 2 == 0 ? someBool : !someBool,
            timesUpdated: num
        });
}

newDocument(5);



// Save it to the db
// newEntry.save((error) => {
//     // need to handle for the error
//     if (error) {
//         console.log("There was an error at MongoDB Atlas" + error);
//     } else {
//         console.log("We saved the data.");
//     }
// });

// https://mongoosejs.com/docs/api.html#model_Model.find
//READ
// An object with the criteria to search the database with
let searchCriteria = {
    old: false,
    // mongoose rule sets $gt "greater than", $lt "less than"
    timesUpdated: {$gt : 2, $lt : 4 }
};

// runs when MongoDB responds
// Actually search the database.
practiceModel.find(searchCriteria, (error, results) => {
    // If error, then...
    if (error) {
        // ... Tell us about it.
        console.log("Something went wrong: " + error);
    } else {
        // Otherwise console log the entries found.
        console.log(results);
    }
});
// Data to update the targeted entry with the right ID
let dataToUpdate = {
    old: true,
    city: "San Francisco"
};

// UPDATE

// Submit the request to MongoDB with the proper id and data to update.
// practiceModel.findByIdAndUpdate("5ddc2adb5c43d3ab1e9fdba6", dataToUpdate, (error, results) => {
//     if (error) {
//         console.log("Something bad happened");
//     } else {
//         console.log(results);
//     }
// });

// DELETE
// First argument is the ID of the entry to delete, 2nd arg is the callb func that runs when MongoDB responds with success or failure.
practiceModel.findByIdAndDelete("5ddc2adb5c43d3ab1e9fdba6", (error, results) => {
    if (error) {
        console.log("Something worse happened");
    } else {
        console.log(results);
    }
});

// https://cloud.mongodb.com/v2/5dd6f4d279358e94ad2b08ef#metrics/replicaSet/5dd6f92dff7a258d88cf5b31/explorer/test/myfirstcollections/find