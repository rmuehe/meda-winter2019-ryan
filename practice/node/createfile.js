console.log("yo");

// need to provide it 3 args (file, data[, options]) 
// options is mostly 'utf8'
// 

// Require function lets you pull in other files

var fs = require("fs");

// 

fs.writeFileSync("firstfile.txt", "I was created by a JS prog.", "utf8");

// if utf8 isn't specified
// then BUFFER char sets (raw hexidecimal values)
// Buffer == long string of Hex values
// write it again and new replaces the old file.

// metadata, binary value : need a hex/binary interpreter to read

fs.writeFileSync("secondfile.txt", "This test will likely be deleted", "utf8");

fs.writeFileSync("anotherfile.txt", "This is a waste of resources", "utf8");

// Write files, will overwrite existing filenames

// Read files, must load as utf8 to make sense.

var text = fs.readFileSync("anotherfile.txt", "utf8");

fs.appendFileSync("anotherfile.txt", "BIG UPDATE", "utf8");

console.log(text);

// if no utf8, you can convert the Buffer to text by concat with ""

fs.appendFileSync("anotherfile.txt", "BIG UPDATE", "utf8");