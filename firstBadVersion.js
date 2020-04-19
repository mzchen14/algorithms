/* 
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example:

Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version. */

//Binary Search Approach
//Time = O(log n), Space = O(1)
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    return function(n) {
        let left = 1 //let left = 1
        let right = n //let right = n
        let badVer = right //set initial badVer to last one
        while(left < right) { //while left is less than right
            let mid = left + Math.floor(right-left/2)  //use this formula to find mid instead of (left + right)/2 because that may cause overflow/TLE
            if(isBadVersion(mid)) { //if the mid is a bad version
                badVer = mid //update the bad version with mid
                right = mid //close the window, now our bad version is between the previous left, and mid
            } else { 
                left = mid+1 //otherwise, close in the left, anything before mid, should be good,  + 1 because mid is also good
            }
        }
        return badVer //return the badVersion **Note, we can also just use right instead of badVer
    };
};