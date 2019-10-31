var library = require("./library.js");
var library2 = require("./library2.js");

function runAll(arr) {
    var results = library.mathify(arr[0], arr[1], arr[2], arr[3]);
    var effects = library.mathify(arr[4], arr[5], arr[6], arr[7],);
    console.log(results, effects);

    var newNumber = results + 10;
    console.log(newNumber);

    var meaning = library2.access;
    meaning();

    console.log(library2.author);
}

var array = [1, 2, 3, 4, 5, 6, 7, 8];

// runAll(array);

module.exports = {
    runAll: runAll,
    array: array
}