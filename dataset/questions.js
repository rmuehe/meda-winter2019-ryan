const fs = require("fs");

class EvictionNotice {
    constructor(month, zip, ellisAct, condoConversion) {
        this.month = month;
        this.zip = zip;
        this.ellisAct = ellisAct;
        this.condoConversion = condoConversion;
    }
}

let data = fs.readFileSync("2018entries.json", "utf8");

data = JSON.parse(data);

dataObjects = [];

for (let i = 0; i < data.data.length; i++) {
    dataObjects.push( stringToObject(data.data[i]) );
}

// Question 1
console.log("What month had the most evictions?");

// index 0 is January, index 11 is December.
let months = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < dataObjects.length; i++) {
    // months[parseInt(dataObjects[i].month) - 1]++;

    switch (dataObjects[i].month) {
        case "01":
            months[0]++;
            break;
        case "02":
            months[1]++;
            break;
        case "03":
            months[2]++;
            break;
        case "04":
            months[3]++;
            break;
        case "05":
            months[4]++;
            break;
        case "06":
            months[5]++;
            break;
        case "07":
            months[6]++;
            break;
        case "08":
            months[7]++;
            break;
        case "09":
            months[8]++;
            break;
        case "10":
            months[9]++;
            break;
        case "11":
            months[10]++;
            break;
        case "12":
            months[11]++;
            break;
    }
}

console.log(months);




























function stringToObject(string) {
    // Split up the entry string into its individual parts.
    let entryArray = string.split(",");

    // Split up the Date string into multiple parts.
    let entryDate = entryArray[5].split("/");

    // Create a new object and provide the proper values.
    let evictionObject = new EvictionNotice(entryDate[0], entryArray[4], entryArray[17], entryArray[18]);

    // Return new object to call location.
    return evictionObject;
}