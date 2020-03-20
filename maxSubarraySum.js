//Max Subarray Sum (Accepts an array of integers, and a number n, the function should calculate the max sum of n consecutive elements in the array)
//Sliding Window method

function maxSubarraySum (arr, num) {

  let maxSum = 0;
  let tempSum = 0;
   //pt 1. Store the initial max sum by calculating the sum of numbers from 0 to i<num
   //ex: in the example passed in, we would sum 2, 6, 9 = 17 as the initial max Sum
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum; //set temp equal to the max sum so we can use it to subtract and add next (see line 19)
  //pt2. loop through the rest of the array, each iteration, subtract the first num from the prev sum, and add the next num to the sum.
  //ex: in the example passed in, we would do (17-2(first num) + 2(next num)) = 17 again
  //next would be 17 - 6 + 1 = 12...etc
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num]  + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  console.log(maxSum)
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
//Time Complexity Object O(n)


