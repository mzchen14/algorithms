var nextPermutation = function(nums) {
    //swap helper func
    const swap = (i, j) => {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }

    //reverse helper func
    const reverse = (start) => {
        let end = nums.length-1
        while(start < end) {
            swap(start, end)
            start++
            end--
        }
    }

    let i = nums.length-1
    while (i >= 0 && nums[i] <= nums[i-1]) {
        i--
    }
    let j = nums.length-1
    while(j >= 0 && nums[j] <= nums[j-1]) {
        j--
    }
    
    if(i == 0) {
        reverse(i) //in the case that it is the last permutation, we                        just want to return the first perm
    } else {
        swap(j-1, j) //otherwise, swap j and previous number                                  before the decreasing started
        reverse(i)
    }
};
