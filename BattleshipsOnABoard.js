//Naive 
var countBattleships = function(board) {
    let numShips = 0
    for(let i = 0; i < board.length; i++) { 
        for(let j = 0; j < board[i].length; j++){ //traverse the matrix
            if(board[i][j] === 'X') { //if there is a ship
                numShips++ //increment ship counter
                sink(board, i, j) //sink the ship and the rest of its parts so we don't count the same ship
            }
        }
    }
    return numShips //return ship count
}

const sink = (board, i, j) => {
    if(i < 0 || j < 0 || i >= board.length || j >= board[i].length || board[i][j] !== 'X') { //if any of these cases (out fo bounds or a .), return out of recursive call
        return
    }
    board[i][j] = '.' //otherwise, sink that part of the ship
    sink(board, i, j + 1) //call sink on all the neighbors/part sof the ship
    sink(board, i, j - 1) 
    sink(board, i + 1, j)
    sink(board, i - 1, j)
}
//Time Complexity = O(n*m), Space = O(min(n, m))

//Optimized 
//Because we know that the ship can only be vertically / horizontally placed AND that tjere os at least one cell seperating, we can use this approach.

var countBattleships = function(board) {
    let numShips = 0
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === '.') { //if not a ship
                continue 
            }
            if(i > 0 && board[i-1][j] === 'X') { //if board[i][j] IS X but the cell directly above was also a ship, continue
                continue
            }
            if(j > 0 && board[i][j-1] === 'X') { //if board[i][j] IS X but the cell directly left was also part of the ship, continue
                continue
            }
            numShips++ //otherwise, it must be a new ship, increment counter
        }
    }
    return numShips
}
//Time = O(n*m), we still traverse the entire array, Space = O(1) we are no longer using recursion.