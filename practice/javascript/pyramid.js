var num = process.argv[2];
var newAsterisk = "";

function asterisk(num) {
    for (var i = 0; i < num; i++) {
        newAsterisk = newAsterisk + "*";
    }
}

function pyramid (peakNum) {
    peakNum = num;

    for (var i = 0; i < peakNum; i++) { 
        asterisk(i/i);
        
        if (i > 0) {
            console.log(newAsterisk);
        }
    }

    for (var i = num; i > 0; --i) {
        newAsterisk = "";
        asterisk(i);
        console.log(newAsterisk);
    }
}

pyramid();