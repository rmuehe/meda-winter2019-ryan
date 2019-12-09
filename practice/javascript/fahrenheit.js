// function convertToF(celsius) {
//     let fahrenheit = celsius * 9/5 + 32;
//     return fahrenheit;
// }

function convertToF (tempNum, scaleStr ) {
    let fahrenheit = 0;
    if (scaleStr === "C") {
      fahrenheit = tempNum * ​9/5 + 32;
    } else if (scaleStr === "K") {
      fahrenheit = tempNum * ​9/5 - 459.67;
    } else if (scaleStr === "R") {
      fahrenheit = tempNum - 459.67;
    }
    return fahrenheit;
}

// function convertToC(fahrenheit) {
//     let celsius = (fahrenheit - 32) * 5/9;
//     return celsius;
// }

function convertToC (tempNum, scaleStr ) {
    let celsius = 0;
    if (scaleStr === "F") {
      celsius = (tempNum - 32) * ​5/9;
    } else if (scaleStr === "K") {
      celsius = tempNum - 273.15;
    } else if (scaleStr === "R") {
      celsius = (tempNum - 491.67) * ​5/9;
    }
    return celsius;
}

//console.log(convertToF(30));

//console.log(convertToC(86));

// let a = function b(){};

//console.log(a);

// let convertToTempScale = (num, str) => {
//     num = Number(num);
//     let convertedTemp = 0;
//     if (str === "C") {
//         convertedTemp = convertToF(num);
//     }

//     if (str === "F") {
//         convertedTemp = convertToC(num);
//     }
//     return convertedTemp;
// };


let convertToTempScale = (startStr, num, endStr) => {
    num = Number(num);
    let convertedTemp = 0;
    if (startStr === "C") {
        return endStr === "F" ? convertedTemp = convertToF(num, startStr):
        endStr === "K" ? convertedTemp = convertToK(num, startStr):
        endStr === "R" ? convertedTemp = convertToR(num, startStr):
        "error";
    } else if (startStr === "F") {
        return endStr === "C" ? convertedTemp = convertToC(num, startStr):
        endStr === "K" ? convertedTemp = convertToK(num, startStr):
        endStr === "R" ? convertedTemp = convertToR(num, startStr):
        "error";
    } else if (startStr === "K") {
        return endStr === "C" ? convertedTemp = convertToC(num, startStr):
        endStr === "K" ? convertedTemp = convertToK(num, startStr):
        endStr === "R" ? convertedTemp = convertToR(num, startStr):
        "error";
    } else if (startStr === "R") {
        return endStr === "C" ? convertedTemp = convertToC(num, startStr):
        endStr === "K" ? convertedTemp = convertToK(num, startStr):
        endStr === "R" ? convertedTemp = convertToR(num, startStr):
        "error";
    }
    return convertedTemp;
};

// console.log(convertToTempScale(process.argv[2], process.argv[3], process.argv[4]));


function convertToR (tempNum, scaleStr ) {
    let rankine = 0;
    if (scaleStr === "F") {
      rankine = (tempNum - 32) * 5/9 + 273.15;
      rankine = tempNum + 459.67;
    } else if (scaleStr === "C") {
      rankine = (tempNum + 273.15) * ​9/5;
    } else if (scaleStr === "K") {
      rankine = tempNum * 9/5;
    }
    return rankine;
}

function convertToK (tempNum, scaleStr ) {
    let kelvin = 0;
    if (scaleStr === "F") {
      kelvin = (tempNum + 459.67) * ​5/9;
    } else if (scaleStr === "C") {
      kelvin = tempNum + 273.15;
    } else if (scaleStr === "R") {
      kelvin = tempNum * 5/9;
    }
    return kelvin;
}


// function convertToK (celsius) {
//     let kelvin =  celsius + 273.15;
//     return kelvin;
// }

// let convertTemp = (tempNum, equation) => {
//     return equation(tempNum);
// }

// console.log(convertTemp(30, convertToF));


console.log(convertToTempScale("F", 86, "C"));