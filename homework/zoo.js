// **HW**
// write getters and setters for Mammal class

class Animal {
    constructor (metabolism, expired) {
        this.metabolism = metabolism;
        this.expired = expired;
    }
}
// "extends" includes all the properties of parent Class
class Fish extends Animal {
    constructor (tasty) {
        // runs the parent Class constructor
        // that you are inheritting
        // always needs to be first, when inheritting
        super("medium-blooded", "fried");
        this.tasty = tasty;
    }
}

class Mammal extends Animal {
    constructor (type, limbs, mouth, nose, eyes, mammary, lifeExpectancy, hair, heightInches, weightLbs, tail) {
        super("warm-blooded", false);
        this.type = type;
        this.limbs = limbs;
        this.mouth = mouth;
        this.nose = nose;
        this.eyes = eyes;
        this.mammary = mammary;
        this.lifeExpectancy = lifeExpectancy
        this.hair = hair;
        this.heightInches = heightInches;
        this.weightLbs = weightLbs;
        this.tail = tail;
        this.age = 0;
        console.log("A new " + this.type + " was born.");
    }

    eat() {
        console.log(this.type + " eats food.");
    }
    sleep() {
        console.log(this.type + " sleeps.");
    }

    // Custom method that checks if the Mammal is dead or not after living a certain number of years.
    live (years) {
        this.age = this.age + years;
        
        if (this.lifeExpectancy <= this.age) {
            console.log(this.type + " is now dead.");
            this.expired = true;
        } else {
            console.log(this.name + " lived for " + years);
        }

    }
    reproduce(weightLbs, heightInches) {
        console.log(this.type + " generates some progeny.");
        return new Mammal(this.type, this.limbs, this.mouth, this.nose, this.eyes, this.hair, this.mammary, this.lifeExpectancy, heightInches, weightLbs, this.tail);
    }
    die() {
        console.log(this.type + " enjoys a brief death.");
        this.expired = true;
    }
}

const firstMammal = new Mammal("dog", 4, 1, 1, 2, 1, true, 2, 30, 24, true);
firstMammal.eat();
firstMammal.sleep();
const secondMammal = firstMammal.reproduce(4, 6);

console.log(secondMammal.heightInches);
console.log(firstMammal, secondMammal);

const firstCatMammal = new Mammal("cat", 4, 1, 1, 2, 1, true, 2, 30, 24, true);
const secondCatMammal = firstCatMammal.reproduce(1, 3);
const thirdCatMammal = firstCatMammal.reproduce(1, 3);
const fourthCatMammal = firstCatMammal.reproduce(1, 3);

let litter = [firstCatMammal, secondCatMammal, thirdCatMammal, fourthCatMammal];
console.log(litter);

const tilapia = new Fish(true);

// console.log(tilapia.metabolism);
// console.log(Object.getOwnPropertyNames(fourthCatMammal));

console.log(Object.getOwnPropertyNames(fourthCatMammal));
console.log(Object.keys(fourthCatMammal));