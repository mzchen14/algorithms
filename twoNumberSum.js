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

/* 7/13 Review */
function twoNumberSum(array, targetSum) {
    // Write your code here.
      let set = new Set()
      for(let i = 0; i < array.length; i++) {
          if(!set.has(array[i])) {
              set.add(array[i])
          }
      }
      
      for(let i = 0; i < array.length; i++) {
          if(set.has(targetSum-array[i]) && targetSum-array[i] !== array[i]) {
              return [array[i], targetSum-array[i]]
          }
      }
      return []
  }

/* This is a naive solution. It uses a set to track the current numbers in the array, 
and then on the second loop, it searches for the second number.
Time = O(n), Space = O(n)

Takeaways: When numbers are not sorted, always consider if it will be more optimized sorted.
Once sorted, binary search is always an option.

NOTE: This quetion is different from Two Sum on Leetcode which asks you to return the INDICES,
in that case, sorting would not be an option.
*/