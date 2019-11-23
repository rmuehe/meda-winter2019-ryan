/*
https://calculate-this.com/how-many-pizzas-buy-calculator
https://brandongaille.com/27-great-pizza-consumption-statistics/
https://www.myfitnesspal.com/food/calories/large-cheese-pizza-402102429
https://www.papajohns.com
https://www.quora.com/What-are-the-sizes-of-Papa-Johns-pizzas
https://www.quora.com/What-are-the-standard-diameters-of-different-pizza-sizes-in-the-United-States
https://www.quora.com/How-many-slices-are-normally-in-an-18-inch-pizza?share=1
*/

const log = console.log;
const pizzaArr = [38.47, 78.5, 113, 147, 201, 254.3, 346.2]; 

// log(pizzaArr);

function plainPizzaSimple (num) {
  let sqInches = num * 45.57;
  log("SQUAREiNCHES IS " + sqInches);
  let smallestRemainder = 1000;
  let bestSize = 0;
  
  for (let i = 0; i < pizzaArr.length; i++) {
    
    let modulo = pizzaArr[i] - sqInches;
    // log("MODULO IS " + modulo);
    if (modulo > 0 && modulo < smallestRemainder ) {
      log(pizzaArr[i] + " is the best size with a remainder of " + modulo + " sq. inches");
      // log("smallestRemainder before IS " + smallestRemainder);
      smallestRemainder = modulo;
      bestSize = pizzaArr[i];
      // log("smallestRemainder after IS " + smallestRemainder);
      // log("bestSize IS " + bestSize);
    }
  }
  return smallestRemainder !== 1000 ? bestSize : "An error has occurred"; 
}

// let people4 = plainPizzaSimple(4);
// log(people4);

function plainPizzaComplex (num) {
  let total = num * 45.57;
  // log("SQUAREiNCHES IS " + total);

  let bestSize = 0;
  let simple = plainPizzaSimple(num);
  let smallestRemainder = simple - total;
  let simpleIndex = -1;
  pizzaArr.forEach((item, index) => {if (item === simple){ simpleIndex = index}});

  let newArr = [];
  for (let i = 0; i < simpleIndex; i++) {
    newArr.push(pizzaArr[i]);
  }
  newArr.reverse();
  
  let multiDArr = [];

  // Work in Progress..
  /*  for (let j = 0; j < newArr.length; j++) {
    for (let k = 0; k < newArr.length; k++) {
      let currentNum = total - newArr[j];
      if (currentNum >= -10) {
        if (currentNum - newArr[k] >= -10) {

        }
      }
    }
  }
*/


  // Works, but not the best.
  /*
  for (let j = 0; j < newArr.length; j++) {
    newArr.forEach((item) => {
      if (total - newArr[j] > -10) {
        if (total - newArr[j] - item > -10) {
          let mathArr = [newArr[j], item, total - newArr[j] - item];
          multiDArr.push(mathArr);
        }
      } 
    });  
  }
*/



  return multiDArr;
}

let people4 = plainPizzaComplex(4);
log(people4);
