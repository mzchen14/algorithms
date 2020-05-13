var threeSum = function(nums) {
    let result = [] //initialize resultArr
    nums.sort((a,b) => a-b) //sort nums array
    
    for(let i = 0; i < nums.length; i++) { //loop through the now sorted array
        if(nums[i] === nums[i-1]) continue //if nums[i] is equal to the previous number, we skip it
        let left = i + 1 //we are using nums[i] as our first num, so we should not use it again for left
        let right = nums.length-1 
        let sum = 0 
        while(left < right) {
            sum = nums[i] + nums[left] + nums[right] //calculate the sum
            if(sum === 0) { //if the sum === 0, we have found a triplet, push it into the result
                result.push([nums[i], nums[left], nums[right]])
                left++ //we are still incrementing and decrementing, in case there is another solution for the index of i
                right--
                
            while(nums[left] === nums[left - 1]) left++ //to filter out duplicate numbers, we are going to increment left until left is no longer the same the prev num
            while(nums[right] === nums[right + 1]) right-- //same for right
                
            } else if(sum < 0) { //if sum is less than 0, we want to increment left because we need a larger num
                left++
            } else { //otherwise decrement right, because we need a smaller num
                right--
            }
        }
    }
    return result //return solution array
};

//Time = O(n^2) we are iterating through the array within the i loop
//Space = O(n) <-- for sorting