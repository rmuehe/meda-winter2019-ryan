// let a = 1;
// let b = 2;

// // async code that changes b to 3
// function asynch () {
//     function a () {
//         return b = 3;
//     }
//     return a();
// }

// console.log(b);

////////// from Medium
// async function firstAsync()

// async function firstAsync() {
//     return 27;
// }
// firstAsync().then(alert);

/////////////
// async function firstAsync() {
//     return 27;
// }

//     setTimeout(() => {
//         return 27;
//     }, 1000);

/////////////
// async function firstAsync() {
//     return 27;
// }

// firstAsync().then((results) => {
//     console.log(results);
// });

// $(document).ready();

let updateThis = 0;

async function firstAsync() {
    let action = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Value sent to Promise");
        }, 3000);
});

    console.log(updateThis);
    updateThis = 1;
    let result = await action;
    
    updateThis = result;
    console.log(updateThis);
    console.log(result);

    return updateThis;
}

let something = firstAsync();
console.log(something);

console.log("I will run after the first Async function");