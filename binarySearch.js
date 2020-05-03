/* 
Write a function that takes in a sorted array of integers as well as a target integer.
The function should use the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise -1.
*/

function binarySearch(array, target) {
    // Write your code here.
      let left = 0
      let right = array.length-1
      while(left < right) {
      let mid = left + Math.floor(right - left/2)
      if(array[mid] === target) return mid
          if(array[mid] > target) {
              right = mid - 1
          } else {
              left = mid + 1
          }
      }
      return -1
  }

/* Time = O(log n), Space = O(1) 
*/