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

Output: 3*/

var numIslands = function(grid) {
    let numOfIslands = 0
    for(let i = 0 ; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === '1') {
                numOfIslands += dfs(grid, i, j)
            }
        }
    }
    return numOfIslands
}

const dfs = (grid, i, j) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === '0')  {
        return 0
    }
    grid[i][j] = '0'
    dfs(grid, i, j + 1)
    dfs(grid, i, j - 1)
    dfs(grid, i - 1, j)
    dfs(grid, i + 1, j)
    return 1
}