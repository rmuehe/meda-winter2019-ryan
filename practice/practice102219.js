/*
practice

1) create a file "repeat.txt"
2) run a loop 100x
3) each loop will add the same sentence to the file

*/
var fs = require("fs");


fs.writeFileSync("repeat.txt", "this is the song that never ends. Yes, it goes on and on, my friend. Someone started singing it not knowing what it was and they kept on singing it just because ", "utf8");

for (var i = 0; i < 99; i++) {
    fs.appendFileSync("repeat.txt", "this is the song that never ends. Yes, it goes on and on, my friend. Someone started singing it not knowing what it was and they kept on singing it just because " , "utf8");
}


var text = fs.readFileSync("repeat.txt", "utf8");

console.log(text);
