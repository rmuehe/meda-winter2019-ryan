// This function gets the correlation coefficient "r" 
// given two arrays of numerical values of the same length

// TO DO: there's no error handling.

// formula taken from here:
// https://www.khanacademy.org/math/ap-statistics/bivariate-data-ap/correlation-coefficient-r/v/calculating-correlation-coefficient-r?modal=1
// The formula is likely the Pearson Correlation Coefficient
// https://en.wikipedia.org/wiki/Pearson_correlation_coefficient


// let arr1 = [1, 2, 2, 3];
// let arr2 = [1, 2, 3, 6];

function correlationCoefficient(arrX, arrY) {
    // gets the mean of the values of an array of numbers
    function arrMean (arr) {
    return arr.reduce((total, item) => total + item) / arr.length;
    }

    // the mean of X values
    let meanX = arrMean(arrX);
    // the mean of Y values
    let meanY = arrMean(arrY);

    // standard deviation formula:
    // square root of each X or Y minus the mean times the next X or Y minus the mean, etc, divided by the number of elements minus one

    // gets the standard deviation of an array given the array mean
    function stdDev (arr, mean) {
    let addedArr = arr.reduce((total, item) => total + Math.pow(item - mean, 2), 0);
    let result =  Math.sqrt(addedArr / (arr.length - 1));
    return result;
    }

    let stdDevX = stdDev(arrX, meanX);
    let stdDevY = stdDev(arrY, meanY);

    // the correlation coefficient r 
    // r = 1/ (number of elements -1) * the sum of multiplications of the number of elements
    // those multiplications are: each X or Y minus the mean divided by the std dev of that X or Y.

    // let r = (1/arr.length) * ...

    function mapArr(arr, mean, stdDev) {
    return arr.map((item) => (item - mean) / stdDev);
    }

    let mapArrX = mapArr(arrX, meanX, stdDevX);
    let mapArrY = mapArr(arrY, meanY, stdDevY);

    let sumMapArr = 0;
    for (var i = 0; i < arrX.length; i++) {
    sumMapArr += mapArrX[i] * mapArrY[i];
    }

    let r = (1/(mapArrX.length - 1)) * sumMapArr;

    console.log("R IS " + r)
    return r;
}

// let r = correlationCoefficient(arr1, arr2);

// randomly generated values 
let arr1 = [
    36, 29, 20, 31, 29, 29, 40, 21, 40, 37, 19, 29,
    20, 28, 31, 14, 36, 22, 14, 37, 35, 26, 33, 39,
    29, 32, 22, 12, 11, 20, 39, 24, 35, 25, 21, 33,
    16, 31, 26, 39, 32, 38, 19, 30, 20, 30, 38, 26,
    36, 31, 26, 27, 12, 22, 13, 39, 31, 12, 33, 30,
    24, 38, 22, 29, 24, 37, 17, 32, 12, 40, 21, 19,
    24, 36, 27, 26, 24, 21, 17, 13, 30, 26, 15, 25,
    34, 18, 33, 27, 24, 13, 12, 33, 22, 27, 39, 39,
    39, 22, 34, 37
  ];

  // randomly generated values
let arr2 = [
     78, 140, 190,  76, 159, 162,  30,  90, 113, 130,  39,  88,
     50, 213,  89, 215, 158, 140, 230,  83,  32, 175, 218, 125,
    135,  91,  61,  77, 210, 196, 143, 182,  45,  35,  88, 181,
    120, 135, 116, 114,  56, 150, 121, 188,  75, 199, 136, 101,
     50, 189, 118,  79, 220, 115, 131, 142, 207,  86, 154,  53,
     33, 224, 123, 189, 117, 122, 218,  88,  75,  92,  84, 140,
     31, 228, 144, 103,  88, 114, 197,  39, 231, 149,  98, 154,
     86,  43, 176,  87,  64, 152, 135, 204, 202, 116, 112, 185,
    102,  44, 145,  75
  ];

  let r = correlationCoefficient(arr1, arr2);








