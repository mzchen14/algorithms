/* 
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/
//Takes a dynamic programming approach where we find the "best possible sum at each given point"
var minPathSum = function(grid) {
    for(let i = 0; i < grid.length; i++) { 
        for(let j = 0; j < grid[i].length; j++) { //loop thru nested grid
            let current = grid[i][j] //let current = value at ij
            let top = i-1 //top = i-1
            let left = j-1 //left = j-1
            if(left < 0 && top < 0) { //if they are both 0
                continue //leave current as is
            }
            if(left < 0) { //else if left is < 0
                grid[i][j] = current + grid[i-1][j] //our only option is to add top
            } else if(top < 0) { //if top is < 0
                grid[i][j] = current + grid[i][j-1] //our only option is to add left
             } else {
                 grid[i][j] = current + Math.min(grid[top][j], grid[i][left]) //else if both are an option, we take the min of left or top
             }
        }
    }
    return grid[grid.length-1][grid[0].length-1] //return the final index (bottom right) which should have our minimized sum
};

//Time = O(mn) Space = O(1)