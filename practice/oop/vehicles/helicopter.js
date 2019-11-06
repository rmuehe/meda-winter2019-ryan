const Vehicle = require("./vehicle.js");

const Helicopter = class Helicopter extends Vehicle {
    constructor(topSpeed, engineType, model, year, color, make, owner, license, mileage, tankSize, GPH) {
        super(topSpeed, "jetfuel", model, year, color, make, owner);
        this.license = license;
        this.mileage = mileage;
        this.tankSize = tankSize;
        this.currentFuel = this.tankSize;
        this.GPH = GPH;
        // this.MPG = MPG;
    }

    fly(hours) {
        this.currentFuel -= this.GPH * hours;
        console.log(`The ${this.make} flew for ${this.hours}. It has ${this.currentFuel} gallons left in the tank`);
    }

    // helicopters can auto-rotate, but planes cannot
    // conversely, planes can glide.
}

module.exports = Helicopter;