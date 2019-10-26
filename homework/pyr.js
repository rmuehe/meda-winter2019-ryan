// Build a sideways "pyramid" in the terminal
// Don't use loops, "/n", and use only 2 console.logs

function pyramid(num, char) {
  let ast = ""
  let arr = [];
  let counter = 0;

  function loop (num) {
    ast = ast + char;
    console.log(ast);
    arr.push(ast); 
    counter++;
    if (counter == num) {return;}
    loop(num);
  }
  loop(num);
    
  arr.reverse().shift();
  arr.forEach(x => console.log(x));  
}

if (process.argv.length === 2) {
  var character = "*";
  var number = Math.ceil(Math.random() * 10);
  console.log("Useage: node pyr.js heightNum char")
} else if (process.argv.length === 3) {
  var character = "*";
  if (Number.isInteger(parseInt(process.argv[2]))) {
    var number = process.argv[2]; 

// TO DO : bugfix
// code breaks when 1/2 or 3*1 is the heightNum input  

  } else {
    var number = Math.ceil(Math.random() * 10);
    console.log("Useage: node pyr.js heightNum char")
    console.log("heightNum is a positive integer");
  }   
} else if (process.argv.length > 4) {
  console.log("Useage: node pyr.js heightNum char")
} else {

// TO DO: bugfix
// code breaks when "*" is the inputted char on the CLI

// Because * is a Bash keyword,
// Something like the following does not fix:
/*
  if (process.argv[3] !== "*") {		
    var character = process.argv[3];
  } else {
    var character = "*"; 
  }	
*/

  var character = process.argv[3];

  if (Number.isInteger(parseInt(process.argv[2]))) {
    var number = process.argv[2]; 
  } else {
    var number = Math.ceil(Math.random() * 10);
    console.log("Useage: node pyr.js heightNum char")
    console.log("heightNum is a positive integer");
  }   
}

pyramid(number, character);
