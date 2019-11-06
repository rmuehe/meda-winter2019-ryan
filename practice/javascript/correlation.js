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








