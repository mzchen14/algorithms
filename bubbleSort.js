function bubbleSort(array) {
    // Write your code here.
      for (let i = array.length-1; i >= 0; i--){
          for(let j = 0; j < i; j++){
              if(array[j] > array[j+1]){
                  swap(j, j+1, array);
              }
          }
      }
      return array;
  }
  function swap(i, j, array) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }