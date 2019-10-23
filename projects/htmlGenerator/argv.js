// process.argv is Node only 

// when you type a word in terminal
// it checks a dictionary for that command

// "node" returns absolute file path /usr/local/bin/node
// argv.js returns abs. file path /Users/student/Documents...


var terminalText = process.argv;

console.log(terminalText);

console.log("custom text only");
console.log(terminalText[2]);
console.log(terminalText[3]);