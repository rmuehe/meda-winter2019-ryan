function Person(firstName, lastName, age, city, state, occupation, eye, hair, beard_color, transportation, marital_status, gender, food) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.state = state;
    this.occupation = occupation;
    this.eye = eye;
    this.hair = hair;
    this.beard_color = beard_color;
    this.transportation = transportation;
    this.marital_status = marital_status;
    this.gender = gender;
    this.food = food;
}

var secondPerson = new Person("Barbara", "Streisand", 50, null, null, "Actress", null, null, null, "Private Jet", null, null, null);
let thirdPerson = new Person("Brad", null, null, null, null, null, null, null, null, "car", null, null, null);

let firstPerson = {
	firstName: "Eduardo",
	lastName: "Garcia",
	age: 29, // Date and Time Objects.
	city: "San Francisco",
	state: "California",
	occupation: "contractor",
	eye: "transparent",
	hair: "black",
	beard_color: "black",
	transportation: "teleportation",
	marital_status: "single",
	gender: "male",
	food: "sushi"
};

console.log("Welcome! " + firstPerson.firstName + ", how was your day today?");

let people = [firstPerson, secondPerson, thirdPerson];

// func that calculates the avg age of the people provided
function getAverageAge (personArray) {
    let totalAge = 0;
    
	for (var i = 0; i < personArray.length; i++) {
        if (personArray[i].age) {
            totalAge = totalAge + personArray[i].age;
        } else {
           personArray.length = personArray.length - 1; 
        }
    }
	return totalAge / personArray.length;
}

console.log("The avg age is " + getAverageAge(people));

// Class is a blueprint for what an Object should have as properties.
// constructor function always exists..

class Employee {
	constructor(firstName, lastName, age, city, state, occupation, eye, hair, beard_color, transportation, marital_status, gender, food, timesheet) {
        console.log("A new employee was created!");
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.city = city;
        this.state = state;
        this.occupation = occupation;
        this.eye = eye;
        this.hair = hair;
        this.beard_color = beard_color;
        this.transportation = transportation;
        this.marital_status = marital_status;
        this.gender = gender;
        this.food = food;
        this.timesheet = timesheet;
        this.originalTime = timesheet;
    }
    // building a method
    work() {
        if (this.timesheet <= 0) {
            console.log(this.firstName + " can no longer work until next week.");
            this.goHomeAndSleep;
        } else {
            console.log(this.firstName + " is working really hard for 1 hour.");
            this.timesheet--;
        }
    }

    // GETTER AND SETTER
    // naming convention of getter and setter
    // setPropertyName, getPropertyName

    getSalary() {
        return this.salary;
    }

    setSalary(newSalary) {
        if (salary > 100000) {
            console.log("nah man");
            return 1;
        } else {
            this.salary = newSalary;
            return 0;
        }
    }
    // END GETTER AND SETTER

    goHomeAndSleep() {
        console.log(this.firstName + " went home to sleep.");
        this.timesheet = this.originalTime;
    }

    hoursLeft() {
        return this.timesheet;
    }
}

let firstEmployee = new Employee("Eduardo", "Garcia", "29", "San Francisco", "California", "", "", "", "", "", "", "", "", 10);
let secondEmployee = new Employee("Pedro", "Alvarez", "30", "Atlanta", "Georgia", "", "", "", "", "", "", "", "", 4);

let employeeArray = [firstEmployee, secondEmployee];
let employeeAvgAge = getAverageAge(employeeArray);
console.log(employeeAvgAge);
// new object based on the class.

console.log(firstEmployee);
console.log(secondEmployee);

console.log(Object.getOwnPropertyNames(firstEmployee));

secondEmployee.work();
secondEmployee.work();
secondEmployee.work();
secondEmployee.work();