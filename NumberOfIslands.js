/* 
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3

*/

var numIslands = function(grid) {
    let numOfIslands = 0 //Initialize counter at 0
    for(let i = 0 ; i < grid.length; i++) { 
        for(let j = 0; j < grid[i].length; j++) { //nested loop for 2d array
            if(grid[i][j] === '1') { //if the index of the grid is at 1
                numOfIslands += dfs(grid, i, j) //we want to add the current numOfIslands to the dfs of (grid, i, j)
            }
        }
    }
    return numOfIslands
}

const dfs = (grid, i, j) => { //helper function for dfs
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === '0')  { //error checking cases: note: grid[i][j] === 0 we have to check again for the bottom recursive calls
        return 0 //if any of the errors are met, then we just return 0
    }
    grid[i][j] = '0' //otherwise, we set the current index to 0 so we won't revisit it
    //we visit all 4 neighbors of the current index
    //these visits will go through, check if any of them are 1s, set them to 0 if so, 
    dfs(grid, i, j + 1) 
    dfs(grid, i, j - 1)
    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    return 1
}

//Time: O(n * m) , Space: O(min(m, n))

//NOTE: It is important to note that we are only counting the ROOT node that triggers a DFS, otherwise