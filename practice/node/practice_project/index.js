console.log("sup lol");

var _ = require("lodash");

var randomNumber = _.random(60, 90);

console.log(randomNumber);

//////////////////////

function partition(originalNum) {


    // function partition (originalNum) {
      var array = [[]]; 
      for (var x = 0; x < originalNum; x++) {
        array[0].push(1);
      }
      
    function plusOne (arr) {
      let last = arr[arr.length-1].slice();
      // if they are all the same, then plusOne the 1st
      let counter = 0;
      last.forEach(function (item, index, arr) {    
        if (arr[index] === arr[index-1]) {
          counter++;
        } 
      });
      if (counter === last.length-1) {
        let spliced = last.splice(0, 1);
        spliced++;
        last.unshift(spliced);
        last.splice(1, last.length-1);
        let reduced = last.reduce(function (total, item) {
          return total+ item;
        });
        for (var j = 0; j < originalNum - reduced; j++) {
          last.push(1);
        } 
        return last;
      }
      for (var i = last.length -1; i >= 0; i--) {
        if (last[i] < last[i-1]) {
          last[i]++;      
          last.splice(i+1, last.length-1);
          let reduced = last.reduce(function (total, item) {
            return total+ item;
          });    
          if (reduced > originalNum) {
            last.pop();
            for (var l = last.length -1; l >= 0; l--) {
              if (last[l] < last[l-1]) {
                last[l]++;
                last.splice(l+1, last.length-1);
                let reduced = last.reduce(function (total, item) {
                  return total+ item;
                });
                for (var m = 0; m < originalNum - reduced; m++) {
                  last.push(1);
                }
                return last;
              }
            }
            last[0]++;
            last.splice(1, last.length-1);
            let reduced = last.reduce(function (total, item) {
              return total+ item;
            });
            for (var n = 0; n < originalNum - reduced; n++) {
              last.push(1);
            }
            return last;
          }
          for (var k = 0; k < originalNum - reduced; k++) {
            last.push(1);
          } 
          return last;
        }
      }  
    }
    
    while (array[array.length-1][0] !== originalNum) {  
      array.push(plusOne(array));
      while (array[array.length-1][0] !== originalNum && array.length % 9000 !== 0) {
        array.push(plusOne(array));
      }
    }  
    
    array = _.flattenDepth(array, 1);
    console.log(array);
    // console.log(array.length);  
    // return array.length;   
    // var partitionCount = 0;
    
    //   while (array[array.length-1][0] !== originalNum) {
    //     array.push(plusOne(array));
    //     array.shift();
    //     partitionCount++;
    
    //     while (array[array.length-1][0] !== originalNum && array.length % 2000 !== 0) {
    //       array.push(plusOne(array));
    //       array.shift();
    //       partitionCount++;
    //     }
    //   }  
      
    // //console.log(partitionCount);
    // return partitionCount;  
    
    }
    

    partition(12);

    // _.flattenDepth(array, 1);

    // console.log(array);

    
    
    
    
    
    
    
    
    
    
    