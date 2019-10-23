var doubleQuores = "this is ..."; // can't break new lines with double quotes
var singleQuortes = 'this is ...';
var stringLiterals = `this
is
...`;

var html = 
"<html>" +
"<head>" +
"<style></style>" +
"</head" +
"<body></body>" +
"</html>";

var html2 = "<html><head><style></style></head></body></html>";

var html3 = `
<html>
    <head>
        <style></style>
    </head>

    <body>
    </body>
</html>
`;

// write the html in IDE then copy to string literal space

var fs = require("fs");
 fs.writeFileSync("sample.html", html3, "utf8");

// var text = fs.readFileSync("sample.html", "utf8");

// console.log(text);

