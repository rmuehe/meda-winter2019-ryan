var fs = require("fs");

// Math.random();

// Converts a JSON string into an actual JS Object
// JSON.parse();

// Converts a JS Object into an actual JSON string
// JSON.stringify();


var obj = {
    "main" : 105,
    "isTrue" : true,
    "someText" : "This is some text.",
    aFunction: function () {
        console.log("Example function")
    },
    "array" : [],
    "childObject" : {nestedKey: "inside"}
};

//console.log(obj.main);
//console.log(obj["main"]);

// method is a function that belongs to an object
// property is a variable that belongs to an object

obj.main = 106;

// Unfortunately cannot store functions or methods
// into JSON...!
// It's used to move data around
// Because: the function parentheses or {} destroy JSON syntax

// obj.aFunction();

//console.log(obj);

var jsonText = JSON.stringify(obj);
// console.log(jsonText);

// fs.writeFileSync("example.Json", jsonText, "utf8");
// console.log("File written");

console.log(fs.readFileSync("example.Json", "utf8"));