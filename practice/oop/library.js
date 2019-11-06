function mathify(a, b, c, d) {
    return a / b * ( c % d);
}
// const results = mathify(1, 2, 3, 4);
// let effects = mathify(6, 7, 8, 9);
// console.log(results, effects);

// const newNumber = results + 10;
// console.log(newNumber);

function shouldntBeAccessed() {
    console.log("the meaning of life");
}

// For other files to access this mathify function
// newFuncName: nameInLibrary
// key: value
// if the key == value, then the key is enough.
module.exports = {
    mathify: mathify
};


