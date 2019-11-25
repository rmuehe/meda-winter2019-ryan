const log = console.log;
const fs = require("fs");
const _ = require("lodash");
const csv = fs.readFileSync("Eviction_Notices.csv", "utf8");


// const dataArr = csv.split("\n");
// log(dataArr[0]);
// const line23 = dataArr[22];
// const line23Arr = line23.split(",");
// log(line23Arr[5]);
// const line23ArrDate = line23Arr[5].split("/");
// log(line23ArrDate);
// const line23ArrDateYear = line23ArrDate[2];

function isYear (csvStr, yearStr) {
    let dataArr = csvStr.split("\n");
    // log(dataArr[0]);
    // let lineNum = dataArr[22];
    let yearArr = [];
    for (var i = 0; i < dataArr.length; i++) {
        let evictedArr = dataArr[i].split(",");
        //log(evictedArr);
        let evictedDateStr = evictedArr[5];
        if (typeof evictedDateStr !== 'undefined') {
        
        //log(evictedDateStr);
        let evictedDateYearNum = evictedDateStr.split("/");
        //log(evictedDateYearNum);
            if (evictedDateYearNum == yearStr) {
                yearArr.push(evictedArr);
            }
        }
            // let evictedDateYearNum = evictedDateStr.split("/");
            // //log(evictedDateYearNum);
            // if (evictedDateYearNum == yearStr) {
            //     yearArr.push(evictedArr);
            // }
    }
    // let lineNumArr = dataArr.split(",");
    // log(lineNumArr[5]);
    // let lineNumArrDate = lineNumArr[5].split("/");
    // log(lineNumArrDate);
    // let lineNumArrDateYear = lineNumArrDate[2];
    return yearArr;
}

let year2018 = isYear(csv, '2018');
log(year2018);
