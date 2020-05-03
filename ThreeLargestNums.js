/* Write a function taht takes in an array of integers and without sorting the input array, return a sorted array of the three largest integers in the input array.
The function should return duplicate integers if necessary; for example: it should return [10, 10, 12] for the input array of [10, 5, 9, 10, 12]
*/
//Time = O(n), Space = O(1)
function findThreeLargestNumbers(array) {
    // Write your code here.
      let largestNums = [-Infinity, -Infinity, -Infinity]
      for(let i = 0 ; i < array.length; i++) {
          let currentNum = array[i]
          if(currentNum >= largestNums[2]) {
              largestNums[0] = largestNums[1]
              largestNums[1] = largestNums[2]
              largestNums[2] = currentNum
          } else if(currentNum >= largestNums[1]) {
              largestNums[0] = largestNums[1]
              largestNums[1] = currentNum
          } else if(currentNum >= largestNums[0]) {
              largestNums[0] = currentNum
          }
      }
      return largestNums
  
  }

  /*Approach: 
  Create an array to track your 3 largest numbers
  Compare each number in the input array to the three largest numbers. 
  Shift the largest numbers down as you find numbers equal or greater than a certain number in the largest array.
  Ex: if a number is greater than the third number in the largest array, that means that the smallest Largest number no longer counts and you shift the second and old largest num down.
  */