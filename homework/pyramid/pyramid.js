let ast = ""
let arr = [];

for (var i = 0; i < 10; i++) {
  ast = ast + "*";
  console.log(ast);
  arr.push(ast); 
}

arr.reverse().shift();

arr.forEach(x => console.log(x));
