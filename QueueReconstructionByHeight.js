/* 
Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.

 
Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
*/

var reconstructQueue = function(people) {
    people.sort((a,b) => a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]) //sort array by descending heights, if heights are they same, then sort by ascending num of people
    let output = [] //initialize output array
    people.forEach(val => { //for each element in people (format: [a,b])
        output.splice(val[1], 0, val) //splice(starting index, delete count, itemToAdd) so: start at kth index, delete nothing, add the value
    })
    
    return output //return output
};

//Time: O(n log n) & O(k) ===> O(n^2)
//Space: O(n) for the output array