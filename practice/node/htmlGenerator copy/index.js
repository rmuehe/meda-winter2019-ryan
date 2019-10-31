var fs = require("fs");
var terminalText = process.argv;

if (terminalText[3] == undefined) {
    console.log("Default background color is white");
    console.log("usage: node index.js fileName backgroundColor")

    terminaltext[3] = "white";
}
var ptag = terminalText[4];

var bgColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

function checkBGcolor (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() == terminalText[3].toLowerCase()) {return 0;} 
    }
    return 1;
}

var check = checkBGcolor(bgColors);

if (check) {
    console.log("not a valid color");
    console.log("usage: node index.js fileName backgroundColor")
    return 2;
}

var htmlTitle = "Sordid Sorted";
var htmlStyle = `
body {
    background-color: ${terminalText[3]};
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
        ${ptag}        
    </body>
</html>`;

var fullFileName = htmlFileName + ".html";

if (htmlFileName == "" || htmlFileName == undefined ) {
    console.log("missing file name");
    console.log("usage: node index.js fileName backgroundColor")
    return 3;
}

fs.writeFileSync(fullFileName, html, "utf8");

//utf8mb4 includes emojiis

console.log("HTML generated");

// process.argv: holds an array, 
// that takes every input from the terminal
// space-delimited

// HW make a sentence appear in a ptag
// on the webpage generated
