// Builds a sideways "pyramid" 
// Uses no loops or "/n"
// Uses one console message


function pyramid(num, char) {
  let ast = "";
  let str = ``;
  let arr = [];
  let counter = 0;

  function loop (num) {
    ast = ast + char;
    str = str + `
${ast}`;
    arr.push(ast); 
    counter++;
    if (counter >= num) {return;}
    loop(num);
  }
  loop(num);
  
  arr.reverse().shift();
  arr.forEach(function (x) { 
    if (arr.indexOf(x) !== arr.length -1) {       
      ast = x;
      return str = str + `
${ast}`;
    } else {  
      ast = x;
      return str = str + `
${ast}
`;
    }
  });  
  return str;
}

var pyr = pyramid(10, "*");
console.warn(pyr);
