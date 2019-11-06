let fs = require("fs");

let randomCarObj = fs.readFileSync("carinventory.json", "utf8");
randomCarObj = JSON.parse(randomCarObj);


console.log(randomCarObj);

console.log(randomCarObj.cars[49], randomCarObj.cars[49].MPG);

// What is the avg. MPG of these 100 cars

let total = 0;
for (var i = 0; i < randomCarObj.cars.length; i++) {
    total += randomCarObj.cars[i].MPG; 
}

let avgMPG = total / randomCarObj.cars.length;
console.log(avgMPG + " is the average MPG");
