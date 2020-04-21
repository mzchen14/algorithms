//Note: This problem is almost identical to Merge Meeting Times
/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/
var merge = function(intervals) {
    intervals.sort((a,b) => {
        return a[0] - b[0]
    }) //sort intervals so that intervals with smallest 1st num => largest first num
    if(!intervals.length) return [] //if the intervals arr is empty, return empty array
    let result = [intervals[0]] //initialize the results array with the first interval 
    for(let i = 1; i < intervals.length; i++) { //loop through the REMAINING intervals (note that we tart at i = 1)
        let current = intervals[i] //set the current interval to i
        let last = result[result.length-1] //set the last interval to the last interval that was pushed into result
        if(current[0] <= last[1]) { //if the first num of current is less than or equal to the end of interval of the last interval
            last[1] = Math.max(current[1], last[1]) //the last interval will equal to the larger of the current end and previous end
        } else {
            result.push(current) //if there is not overlap, then just push the current interval on its own
        }
    }
    return result //return results array
};

//Time = O(n log n) Space = O(n)