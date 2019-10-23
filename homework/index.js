var fs = require("fs");
var terminalText = process.argv;
var color = "";

if (terminalText[3] == "black") {
    color = "white";
} else {
    color = "black";
}

if (terminalText[3] == undefined) {
    console.log("Default background color is white");
    console.log("usage: node index.js fileName backgroundColor")

    terminaltext[3] = "white";
}



var ptag = terminalText[4];

var htmlTitle = "Sordid Sorted";
var htmlStyle = `
body {
    background-color: ${terminalText[3]};
    font-size: 200%;
    color: ${color};
}`;
var htmlBody = "";
var htmlFileName = terminalText[2];
var html;

html = `
<!DOCTYPE html>

<html lang ="en">
    <head>
        <meta charset="utf-8">
        <title>${htmlTitle}</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">

        <link rel="stylesheet" href="css/styles.css?v=1.0">

        <style>${htmlStyle}</style>
    </head>

    <body>
        ${htmlBody}
        <p>${ptag}</p>        
    </body>
</html>`;

var fullFileName = htmlFileName + ".html";

if (htmlFileName == "" || htmlFileName == undefined ) {
    console.log("missing file name");
    console.log("usage: node index.js fileName backgroundColor")
    return 1;
}

fs.writeFileSync(fullFileName, html, "utf8");

//utf8mb4 includes emojiis

console.log("HTML generated");

// process.argv: holds an array, 
// that takes every input from the terminal
// space-delimited

// HW make a sentence appear in a ptag
// on the webpage generated
