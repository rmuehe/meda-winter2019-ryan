
const Vehicle = require("../practice/oop/vehicles/vehicle.js");

const Truck = class Truck extends Vehicle {
    constructor(topSpeed, engineType, model, year, color, make, owner, license, mileage, tankSize, MPG, capacityTons) {
        super(topSpeed, engineType, model, year, color, make, owner);
        this.engineType = "diesel";
        this.license = license;
        this.mileage = mileage;
        this.tankSize = tankSize;
        this.currentFuel = this.tankSize;
        this.MPG = MPG;
        this.capacityTons = capacityTons;
        this.currentLoadTons = 0;
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
        if (tons <= 0) {
            console.log("Input a positive number of tons");
            return 3;
        }

        if (this.capacityTons - tons < 0) {
            console.log(`${tons} tons is more than ${this.model} can hold.
The max capacity is ${this.capacityTons}
The current capacity is ${this.currentLoadTons}
Lower the weight and try again`);
        } else {
            this.currentLoadTons += tons;
            console.log(`${tons} tons added to the ${this.make}
You can add ${this.capacityTons - this.currentLoadTons} more tons`);
        }
    }

    unload (tons) {
        if (tons <= 0) {
            console.log("Input a positive number of tons");
            return 4;
        }

        if (tons > this.currentLoadTons) {
            console.log("You cannot remove more tonnage than you have.");
            console.log(`At most you can remove ${this.currentLoadTons} tons from the ${this.model}`);
            return 5;
        } else {
            this.currentLoadTons -= tons;
            console.log(`Unloaded ${tons} from the ${this.model}
There's now room for ${this.capacityTons - this.currentLoadTons} more tons`);
        }
    }
}

module.exports = Truck;

let volvo = new Truck(100, null, "VNL 860", 2005, "black", "Volvo", "self", "GETRDUN", 100000, 40, 10, 10000);
console.log(volvo);

volvo.transport(9000);
