// Build a minimal pizza program.
// Inputs:
// Number of people, how many vegetarians
// Outputs:
// Number of pizzas with topping suggestions.

const log = console.log;
// size of pizzas in sq inches [personal, small, medium, large, x-large]
const pizzaArr = [38, 78, 113, 147, 201];
pizzaArr.reverse();

function pizza (pplNum, vegNum) {
    // the total amount of sq. in to satisfy the avg US pizza consumer
    let total = pplNum * 45.57;
    let vegTotal = vegNum * 45.57;
    let pizzaObj = { 
        "meat" : [],
        "veg" : []
    };
           
    if (vegNum === 0 || vegNum === undefined) {
        // pizzaNum = total - pizzaArr[i];
        let i = 0;
        while (total >= -10 || total >= 10) {
            if (total - pizzaArr[i] >= -10 || total - pizzaArr[i] >= 10) {
            pizzaObj.meat.push(pizzaArr[i]);
            total -= pizzaArr[i];
            } else {
                i++;
            }
            if (i >= pizzaArr.length) {
                break;
            }
        }   
    } else {
        let i = 0;
        while (vegTotal >= -10 || vegTotal >= 10) {
            if (vegTotal - pizzaArr[i] >= -10 || vegTotal - pizzaArr[i] >= 10) {
              pizzaObj.veg.push(pizzaArr[i]);
              vegTotal -= pizzaArr[i];
            } else {
                i++;
            }
            if (i >= pizzaArr.length) {
                break;
            }
        }    

        let meatTotal = total - vegTotal;
        i = 0;
        while (meatTotal >= -10 || meatTotal >= 10) {
            if (meatTotal - pizzaArr[i] >= -10 || meatTotal - pizzaArr[i] >= 10) {
                pizzaObj.meat.push(pizzaArr[i]);            
                meatTotal -= pizzaArr[i];
            } else {
                i++;
            }
            if (i >= pizzaArr.length) {
                break;
            }
        }
    }
    return pizzaObj;       
}

let fourPeople = pizza(8, 3);
log(fourPeople);

var exports = module.exports = {};
exports.pizza = pizza;