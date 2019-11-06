// npm install -S lodash
// - lodash is a library for a node project

const _ = require("lodash");
const Car = require("./car.js");
const Helicopter = require("./helicopter.js");
const fs = require("fs");

let random = (min, max) => Math.ceil(min + (Math.random() * (max - min)));

console.log(random);
// let my1stCar = new Car(120, "gas", "Civic", 2000, "black", "Honda", "Enterprise", "8EFD39E9", 125000, 12, 35);
// let randomCar = new Car("User", "Generic", "Company", random(1930, 2020), "transparent", random(1111111, 9999999), random(0, 300000), random(0, 40), random(1, 40), "gas", random(28, 240));

// let randomCar = new Car(random(28, 240),"gas", "Generic", random(1930, 2020), "transparent", "Company", random(0, 300000), random(11111111, 99999999), random(0, 40), random(1, 40), random(1, 40));

// console.log(randomCar);

// randomCar = JSON.stringify(randomCar);

// fs.writeFileSync("carinventory.txt", randomCar, "utf8");

function createCar(make) {
    let randomCar = new Car(random(28, 240),"gas", make, random(1930, 2020), "transparent", "Company",  "User", random(11111111, 99999999), random(0, 300000), random(4, 40), random(10, 40));
    return randomCar;
}

let container = {
    cars: []
    // lastAccess:
    // totalCars:
};

for (let i = 0; i < 100; i++) {
    container.cars.push(createCar("Elision" + (i+1)));
}

// container.cars.push(randomCar);

let stringifiedData = JSON.stringify(container);

// for (var i = 0; i < 20; i++) {
//     randomCar[i] = JSON.stringify(randomCar);
//     fs.writeFileSync("carinventory.txt", randomCar, "utf8");
// }

fs.writeFileSync("carinventory.txt", stringifiedData, "utf8");

let randomCarObj = fs.readFileSync("carinventory.txt", "utf8");
randomCarObj = JSON.parse(randomCarObj);


console.log(randomCarObj);