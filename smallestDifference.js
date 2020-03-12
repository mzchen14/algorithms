//brute force
function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
      let smallestDiff = 0;
      let currentDiff = 0;
      let resultArray = [];
      for(let i = 0; i < arrayOne.length; i++) {
          for(let j = 0; j < arrayTwo.length; j++){
              currentDiff = Math.abs(arrayOne[i] - arrayTwo[j])
              if(i === 0 && j === 0) {
                  smallestDiff = currentDiff;
              }
              if(currentDiff < smallestDiff) {
                  smallestDiff = currentDiff;
                  resultArray = [arrayOne[i], arrayTwo[j]]
              }
          }
      }
      return resultArray;
  }
  
  //optimize using pointers
  //Note: can use infinity or negative infinity as default values instead of 0.
  