const Vehicle = class Vehicle {
    constructor(topSpeed, engineType, model, year, color, make, owner) {
        this.topSpeed = topSpeed;
        this.engineType = engineType;
        this.model = model;
        this.year = year;
        this.color = color;
        this.make = make;
        this.owner = owner;

        console.log("NEW VEHICLE WAS CREATED.")
    }

    speak() {
        console.log(`This is a vehicle object`);
    }
    
}

module.exports = Vehicle;

