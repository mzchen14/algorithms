/* 
Given two non-empty array of integers, write a function that determines whether the second array is a subsequence of the first.
A subsequence of an array is a set of numbers that aren't necessarily adjavent in the array but that are in the same order
as they appear in the array.
For instance, the numbers [1, 3, 4] from a subsequenve of the array [1, 2, 3, 4] and so do the numbers [2, 4]. Note that
a single number in an array and the array itself are both valid subsequences of the array.
*/

function isValidSubsequence(array, sequence) {
    // Write your code here.
      let sPointer = 0;
      let aPointer = 0;
      while(aPointer < array.length && sPointer < sequence.length) {
          if(sequence[sPointer] === array[aPointer]) {
              sPointer++
              aPointer++
          } else {
              aPointer++
          }
      }
      return sPointer > sequence.length-1
  }

  /* 
  7/13
  Time = O(n)
  Space = O(1) 
  
  Analysis:
  2 Pointers approach, one pointer going through the first arr, the other pointer through the second.
  If the 2 pointers point at the same number, then we increment both (that number was part of the subsequence)
  otherwise, we only increment the aPointer because we still need to find the second element in the sequence array.
  Lastly, we want to break out of the array if we each the end of either arrays. (If we break out of the array, that means we have no more numbers we can check, 
    if we break out of the sequence, that means we've successfully found all the numbers in the sequence)

    We then return true if the sequence pointer finished going through all the elements in the sequence.
  */
  