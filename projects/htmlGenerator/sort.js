var array = process.argv;
array.shift();
array.shift();

function sort1 (arr) {
    let darray = arr.slice();
    let counter = 0;
    for (var i = 0; i < darray.length; i++) {
  //     console.log("I IS " + i)
      if (darray[i] < darray[i-1]) {
        let temp = darray[i];
        darray[i] = darray[i-1];
        darray[i-1] = temp;
        counter++;
        // console.log(darray);
      }
  //     console.log("COUNTER IS " + counter)
    }
  //   if (counter > 0) {
  //     console.log(true);
  //       counter = 0;
  //       array = sort(darray);
  //     } else {
  //       return darray;
  //     }
    return darray;
  }
  
//   array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  
  function sort (darray) {
    for (var j = 0; j < darray.length; j++) {
      darray = sort1(darray);
    }
    return darray;
  }
  
  array = sort(array);
  console.log(array);
  
  