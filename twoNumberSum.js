function twoNumberSum(array, targetSum) {
      array.sort((a,b) => a-b)
      let i = 0;
      let j = array.length-1
      while(i < j) {
          if(array[i] + array[j] < targetSum) {
              i++;
          } else if(array[i] + array[j] > targetSum) {
              j--;
          }
          else if(array[i] + array[j] === targetSum) {
              return [array[i], array[j]]
          }
      }
      return [];
  }
  
  //Time: O(n log n) Space: O(1)