const Vehicle = require("./vehicle.js");

const Truck = class Truck extends Vehicle {
    constructor(topSpeed, engineType, model, year, color, make, owner, license, mileage, tankSize, MPG) {
        super(topSpeed, engineType, model, year, color, make, owner);
        this.engineType = "diesel";
        this.license = license;
        this.mileage = mileage;
        this.tankSize = tankSize;
        this.currentFuel = this.tankSize;
        this.MPG = MPG;
        this.capacityTons = 10000;
    }

    travel (miles) {
        if (this.currentFuel - (miles / this.MPG) <= 0) {
            console.log(`The ${this.model} can't make that trip. 
At most, it can travel ${(this.currentFuel * this.MPG).toFixed(2)} miles.`)
        } else {
            this.currentFuel = this.currentFuel - (miles / this.MPG);
            console.log(`The ${this.model} has ${this.currentFuel.toFixed(2)} gallons of ${this.engineType} left`);
        }
    }

    refuel (num) {
        if (num > 0 && num < this.tankSize - this.currentFuel) {
            this.currentFuel += num;
            console.log(`Added ${num} gallons of ${this.engineType} to the ${this.model}
The total fuel is now ${this.currentFuel.toFixed(2)}`);
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

    transport (tons) {
        if (tons < 0) {
            console.log("Input a positive number of tons");
            return 3;
        }

        if (this.capacityTons - tons < 0) {
            console.log(`${tons} tons is more than the capacity of the ${this.model}.
The capacity is ${this.capacityTons}
Lower the weight and try again`);
        } else {
            this.capacityTons -= tons;
            console.log(`${tons} tons added to the ${this.make}
There is ${this.capacityTons} left over`);
        }
    }
}

module.exports = Truck;