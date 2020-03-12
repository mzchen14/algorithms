function quickSort(array, left = 0, right = array.length-1) {
      if(left < right){
          let pivotIdx = pivot(array, left, right);
          quickSort(array, left, pivotIdx-1)
          quickSort(array, pivotIdx+1, right)
      }
      return array
      }
  
  function swap(i, j, arr) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  
  function pivot(arr, start=0, end=arr.length-1){
      let pivot = arr[start];
      let swapIdx = start;
      for (let i = start+1; i <= end; i++){
          if(arr[i] < pivot){
              swapIdx++;
              swap(i, swapIdx, arr)
          }
      }
      swap(start, swapIdx, arr)
      return swapIdx;
  } 