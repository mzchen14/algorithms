function mergeSort(array) {
      if(array.length <= 1) return array;
      let mid = Math.floor(array.length/2);
      let left = mergeSort(array.slice(0, mid));
      let right = mergeSort(array.slice(mid));
      return merge(left, right)
  }
  
  function merge(arr1, arr2){
      const result = [];
      let i = 0;
      let j = 0;
      while(i < arr1.length && j < arr2.length){
          if(arr1[i] <= arr2[j]){
              result.push(arr1[i]);
              i++;
          } else {
              result.push(arr2[j])
              j++;
          }
      }
      while(i < arr1.length) {
          result.push(arr1[i]);
          i++;
      }
      while(j < arr2.length) {
          result.push(arr2[j]);
          j++;
      }
      
      return result;
  }