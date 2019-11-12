let fs = require("fs");

let randomCarObj = fs.readFileSync("carinventory.json", "utf8");
randomCarObj = JSON.parse(randomCarObj);


// console.log(randomCarObj);

console.log(randomCarObj.cars[49], randomCarObj.cars[49].MPG);

// What is the avg. MPG of these 100 cars

let total = 0;
for (var i = 0; i < randomCarObj.cars.length; i++) {
    total += randomCarObj.cars[i].MPG; 
}

let avgMPG = total / randomCarObj.cars.length;
console.log(avgMPG + " is the average MPG");

/*
1) Get the array of objects.
2) make an empty counter
3) make a loop iterating over each object in the array
4) increase the counter if the loop satisfies a condition
*/

let dataCount = 0;
let someCars = randomCarObj.cars;
// console.log(someCars.year);

for (var j = 0; j < someCars.length; j++) {
    if (someCars[j].year <= 1960 && someCars[j].year >= 1940) {
        dataCount++;
    }
}

console.log(`The number of cars b/w 1940 and 1960 is : ${dataCount}`); 
// console.log(someCars)

let mpgArr = [];
for (var k = 0; k < someCars.length; k++) {
    mpgArr.push(someCars[k].MPG);
}

console.log(mpgArr);

let topSpeedArr = [];
someCars.forEach(function (item) {
   return topSpeedArr.push(item.topSpeed);
});

console.log(topSpeedArr);