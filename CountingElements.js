// Given an integer array arr, count element x such that x + 1 is also in arr.

// If there're duplicates in arr, count them seperately.

 

var countElements = function(arr) {
    let count = 0
    arr.forEach(element => {
        if(arr.indexOf(element+1) > -1) {
            count++
        }
    })
    return count
};

var countElements = function(arr) {
    let count = 0
    let set = new Set(arr)
    arr.forEach(ele => {
        if(set.has(ele+1)) count++
    })
    return count
};