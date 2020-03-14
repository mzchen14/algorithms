//Brute Force
var findMedianSortedArrays = function(nums1, nums2) {
  let combined = [...nums1, ...nums2] //merge the two arrays into 1
  combined.sort((a, b) => a-b); //sort the merged array
   let x = combined.length/2 //let x equal the middle num
  if(combined.length % 2 === 0) { //if the length is divisible by 2, that means there is no middle num, we must return the average of the 2 middle nums.
      return (combined[x] + combined[x-1])/2 //it's x & x - 1 because for ex [1, 2, 3, 4], would return index 2 which is 3, but the two middle numbers are 2 & 3, so x-1 & x respectively.
  } else {
      return combined[Math.floor(x)] //otherwise, return the number that is lower than the middle.
      //ex: [1, 2, 3] 3/2 = 1.5 , floored would give us index 1, which is the number 2.
  }
};
