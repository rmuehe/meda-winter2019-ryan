// 2) Make a JavaScript (not HTML) list of products to sell.

let array = ["earrings", "cap", "necklace", "bracelet", "charms", "stud", "cuff", "hat"];
let tempLit = ``;
// 3) Figure out how to display your list on the page.
console.log("List of Products to Sell");
console.log(array, "");
// Or
console.log("Multiline List of Products to Sell");
tempLit = `
List of Products to Sell`;
for (var h = 0; h < array.length; h++) {
  console.log(h+1 + ") " + array[h]);
  tempLit = tempLit + `
      ${h+1}) ${array[h]}`;
}
console.log("");

// 4) Write a function that will display a random item from your list on the page.
function randomItemGet (arr) {
  let random = Math.random();
  let num = Math.floor(random * arr.length);
  return arr[num];
}
let randomItem = randomItemGet(array);
console.log("A Random Item From the List:");
tempLit = tempLit + `

A Random Item From the List:
      ${randomItem}`;
console.log(randomItem);
console.log("");


// 5) Display the last item from your list on the page.
console.log("The Last Item From the List:");
tempLit = tempLit + `

The Last Item From the List:
      ${array[array.length-1]}`;
console.log(array[array.length-1]);
console.log("");

// 6) Display all the list items longer than three letters.
console.log("Items Longer Than Three Letters:");
tempLit = tempLit + `

Items Longer Than Three Letters:`
for (var k = 0; k < array.length; k++) {
  if (array[k].length > 3) {
    console.log(array[k]);
    tempLit = tempLit + `
    - ${array[k]}`;
  }
}
console.log("");


// 7) Check your indentation so your code is easy to read!


// CHALLENGE
// Given a string, return a new string 
// where the second and last characters are exchanged. 

function swapChars(string) {
  let secondLetter = string[1];
  let lastLetter = string[string.length-1];
  string[1] = lastLetter;
  let stringArr = string.split('');
  stringArr[1] = lastLetter;
  stringArr[stringArr.length-1] = secondLetter;
  let newStr = stringArr.join("");
  console.log("The word '" + string + "' below has had", "the 2nd and last letters swapped:");
  tempLit = tempLit + `
  The word '${string}' below has 
  had the 2nd and last letters swapped:"`;
  return newStr;
}

console.log("Challenge Result:");
tempLit = tempLit + `

Challenge Result:`;
let swapped = swapChars("earrings");
console.log(swapped);
tempLit = tempLit + `
      ${swapped}
`;
console.log(tempLit);



//////////////////////////////////////
// Below is code for changing a string into an array
//   in order to manipulate the character values.
// Specifically: swap the last letter for the second letter,
//   then convert the new array back into a string.

// This is then iterated over array elements.
/////////////////////////////////////

/*

function swapCharsArr(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
  //   console.log("I IS: " + i);
  
    let secondLetter = arr[i][1];
  //   console.log("SECONDlETTER IS: " + secondLetter);
  
    let lastLetter = arr[i][arr[i].length-1];
  //   console.log("LASTlETTER IS: " + lastLetter);

    let stringArr = arr[i].split('');
  //   console.log("STRINGaRR is:", stringArr);
  
    stringArr[1] = lastLetter;
  //   console.log("STRINGaRR AFTER SWAP#1 is:", stringArr);
  
    stringArr[stringArr.length-1] = secondLetter;
  //   console.log("STRINGaRR AFTER SWAP#2 is:", stringArr);
  
    let x = stringArr.join("");
    newArray.push(x);
  }

  console.log("The Array of Strings With Swapped Letters");
  console.log(newArray);
  console.log("");

  console.log("A List of Strings With Swapped Letters");
  for (var j = 0; j < newArray.length; j++) {
    console.log(j+1 + ") " + newArray[j]);
  }
  return newArray;
}

var swappedArr = swapCharsArr(array);

*/



