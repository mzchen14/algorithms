//Task: Remove dupes in a sorted array and return the length of the new arr
//Brute Force
var removeDuplicates = function(nums) {
  for(let i = 0; i<nums.length; i++){ //loop through arr
      if(nums[i] === nums[i+1]){ //while char at i is equal to i+1
          nums.splice(i+1, 1); //splice the char at i+1
      }
  }
  return nums.length; //return length
};

//optimized - we disregard what is left beyond the returned length
var removeDuplicates = function(nums) {
      if(nums.length === 0) return 0; //if the length is 0, return 0.
      let i = 0; //pointer 1
      for (let j = 0; j < nums.length; j++) { //pointer 2 in loop
          if(nums[j] !== nums[i]) i++; //if the element at num[j] is not equal to num[i], increment i
          nums[i] = nums[j]; //after incrementing, set the element at i equal to element at j
      } //if the element at j IS equal to the element at i, then it will loop and increment j
      return i+1; //return i+1, i being the index of the last unique element, length is +1 because of the 0th index.
  };
