//Given an array of integers and an integer. Write a function that moved all instances of taht integer in an array to the end. 
//The function should perform this in place and does not needt o maintain the order of the other integers.

function moveElementToEnd(array, toMove) {
      let j = array.length-1;
      for(let i = 0; i<array.length && i<j; i++) {
          if(array[i] === toMove){
              while(i < j && array[j] === toMove){
                  j--;
              }
              swap(i, j, array);
          }
      }
      return array;
  }
  function swap(i, j, arr){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }