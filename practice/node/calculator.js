// process.argv returns an array of values from the terminal

var a = parseInt(process.argv[2]);
var b = parseInt(process.argv[4]);

if (process.argv.length > 5 || process.argv.length < 5) {
    console.log("useage: node calculator.js num1 mathOperator num2");
    console.log("mathOperator is: +  -  x  /  %  ^");
    return 1;
}

// if (!isNaN(process.argv[2]) && !isNaN(process.argv[4]) ) {
//     let nan = isNan(process.argv[2]);
//     console.log(nan);
//     console.log("useage: node calculator.js num1 mathOperator num2");
//     console.log("mathOperator is: +  -  x  /  %  ^");
//     return 2;
// }

if (process.argv[3] == "+") {
    console.log(add(a,b));
} else if (process.argv[3] == "-") {
    console.log(subtract(a,b));
} else if (process.argv[3] == "x") {
    console.log(multiply(a,b));
} else if (process.argv[3] == "/") {
    console.log(divide(a,b));
} else if (process.argv[3] == "%") {
    console.log(modulo(a,b));
} else if (process.argv[3] == "^") {
    console.log(exponent(a, b));
} else {
    console.log("useage: node calculator.js num1 mathOperator num2");
    console.log("mathOperator is: +  -  x  /  %  ^");
    return 3;
}

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function modulo (a, b) {
    return a % b;
}

function exponent (a, b) {
    return Math.pow(a, b);
}

// xterm terminal
// iterm2 alternative to mac terminal
// Used because it's very interactive, uses alot of diff colors

// console.log(parseInt(undefined)); // this returns NaN

// refactoring: change the code to improve performance, readability etc
// some code editors will do it automatically:
// e.g., rename all the names of a specific variable