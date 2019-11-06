const Vehicle = require("./vehicle.js");

const Car = class Car extends Vehicle {
    constructor(topSpeed, engineType, model, year, color, make, owner, license, mileage, tankSize, MPG) {
        super(topSpeed, engineType, model, year, color, make, owner);
        this.license = license;
        this.mileage = mileage;
        this.tankSize = tankSize;
        this.currentFuel = this.tankSize;
        this.MPG = MPG;
    }

    travel (miles) {
        if (this.currentFuel - (miles / this.MPG) <= 0) {
            console.log(`The ${this.model} can't make that trip. 
At most, it can travel ${(this.currentFuel * this.MPG).toFixed(2)} miles.`)
            return 3;
        } else {
            this.currentFuel = this.currentFuel - (miles / this.MPG);
            console.log(`The ${this.model} has ${this.currentFuel.toFixed(2)} gallons of ${this.engineType} left`);
            return 0;
        }
    }

    refuel (num) {
        if (num > 0 && num < this.tankSize - this.currentFuel) {
            this.currentFuel += num;
            console.log(`Added ${num} gallons of ${this.engineType} to the ${this.model}
The total fuel is now ${this.currentFuel.toFixed(2)}`);
            return 0;
        } else {
            if (num <= 0) {
                console.log("Need a positive number.");
                return 1;
            }
            console.log("You can't add that much fuel.");
            console.log(`At most you can add ${(this.tankSize - this.currentFuel).toFixed(2) - 0.01} gallons of ${this.engineType}`);
            return 2;
        }
    }

    // overloading
    speak() {
        console.log(`This is a car object`);
    }
}

module.exports = Car;