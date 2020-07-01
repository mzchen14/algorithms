/* 
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).
*/

/* Approach:
Transpose the matrix
Reverse each row
*/

var rotate = function(matrix) {
    let n = matrix.length
    for(let i = 0; i < n; i++) { 
        for(let j = i; j < n; j++) { //swap  
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n/2; j++) { //swap again
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][n-1-j]
            matrix[i][n-1-j] = temp
        }
    }
};

/* You can do this instead of second loop:
for(let i = 0; i< n; i++){
     matrix[i].reverse() 
} 

*/

/* Time Complexity: O(n*n) for nested i, j loops 
Space = O(1)
*/