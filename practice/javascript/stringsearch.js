// let ast = "";

// for (var i = 0; i < 10; i++) {
//   ast = ast + "*";
//   console.log(ast);
  
//   // implement a string literal that takes ast
//   // Print that upside down after the for loop ends
  
// }

var text = process.argv[2].toLowerCase();
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
let array = [];
for (var j = 0 ; j < 26; j++ ) {
    var counter = 0;
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) == letters[j]) {
            counter++;
        } 
    }
    array.push(letters[j].toUpperCase() + ` : ${counter}`);    
}
console.log(array);