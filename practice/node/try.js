/* 
1) try to read file "ex.txt"
2) if file doesn't exist, then write the file
- no content inside the txt file
3) If it does exist, append a string
4) 
*/

var fs = require("fs");


try {
var read = fs.readFileSync("ex.txt", "utf8")
} catch (error) {
    console.log("Failed");
    console.log(error.stack);

    // try {} catch () {}
    fs.writeFileSync("ex.txt","YOUR MOM EXISTS","utf8");
    console.log("file created");
} finally {
    console.log("appended file");
    fs.appendFileSync("ex.txt", "YOUR MOM EXISTS", "utf8");
}

console.log("program ran")