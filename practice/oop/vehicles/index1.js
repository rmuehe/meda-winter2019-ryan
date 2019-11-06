const Car = require("./car.js");
const Truck = require("./truck copy.js");
const Helicopter = require("./helicopter.js");

let my1stCar = new Car(120, "gas", "Civic", 2000, "black", "Honda", "Enterprise", "8EFD39E9", 125000, 12, 35);

console.log(my1stCar);

let my2ndCar = new Car (null, null, "model", null, null, "make", null, null, "mileage", null, "MPG");
console.log(my2ndCar);

my1stCar.travel(100);
// my1stCar.travel(100);
// my1stCar.travel(100);
// my1stCar.travel(100);
// my1stCar.travel(100);

my1stCar.refuel(2.85);

let volvo = new Truck(100, null, "VNL 860", 2005, "black", "Volvo", "self", "GETRDUN", 100000, 40, 10);
console.log(volvo);

volvo.transport(9000);

let the1stCopter = new Helicopter();
console.log(the1stCopter);

