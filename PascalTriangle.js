/* Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
*/
var generate = function(numRows) {
    const tri = []
    for(let i = 0; i < numRows; i++) {
        tri[i] = []
        tri[i][0] = 1
        for(let j = 1; j < i; j++) {
            tri[i][j] = tri[i-1][j-1] + tri[i-1][j]
        }
        tri[i][i] = 1
    }
    return tri
};

/* 
Note: Pascal Triangle is the basis of DP!!
Time: O(N^2)
Space = O(n^2) Every number is being stored in tri
*/