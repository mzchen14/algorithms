//rotate an array to the right k elements;
var rotate = function(nums, k) {
  for(i = 0; i < k; i++) {
      nums.unshift(nums.pop()) //pop the element from the end and attach it to the front of the arr.
  }
};

