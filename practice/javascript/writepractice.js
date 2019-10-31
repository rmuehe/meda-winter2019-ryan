var fs = require("fs");

var obj = {
    "yourMom" : "exists",
    "isTrue" : true,
    "sheIs" : "soExisty",
    "sheLives" : "whereSheIs"
};


var jsonText = JSON.stringify(obj);

// console.log(jsonText);


//  fs.writeFileSync("saved.json", jsonText, "utf8");
//  console.log("File written");

//  console.log(fs.readFileSync("saved.json", "utf8"));

// var text =  fs.readFileSync("saved.json", "utf8");

var text = jsonText;

text = JSON.parse(text);
console.log(text);
text.sheLooks = "existent";

text = JSON.stringify(text);

// This section adds a historical record of the data called "history.txt"

// Unusable for JS programs:
// fs.appendFileSync("history.txt", stringifiedObject + "\n", "utf8");

// Read History file
var historyStr = fs.readFileSync("history.json", "utf8");
var historyObj = JSON.parse(historyStr);
// console.log(historyObject.objectsArray[0]);

var historyArr = historyObj.objectsArray;
var timestampArr = historyObj.timestamp;

historyArr.push(text);
timestampArr.push(new Date().toLocaleString());

historyObj.objectsArray = historyArr;
historyObj.timestamp = timestampArr;

var updatedJSON = JSON.stringify(historyObj);

fs.writeFileSync("history.json", updatedJSON, "utf8");



// End History Record Save


// fs.writeFileSync("saved.json", text, "utf8");
// console.log("File written");





