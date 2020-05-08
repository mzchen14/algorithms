/* 
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

 Input: root = [1,2,3,4], x = 4, y = 3
Output: false


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
*/

/* Approach:
DFS to look for x & y. 
Additional info that need to be tracked are parents and depth 
*/
var isCousins = function(root, x, y) {
    const dfshelper = (node, depth, parent, search) => {
        if(node === null) return
        if(node.val === search) {
            return [node, depth, parent]
        }
        let left = dfshelper(node.left, depth+1, node, search)
        let right = dfshelper(node.right, depth+1, node, search)
        return left ? left : right // if left is valid, return left else return right
        //This is because one side will return null because the node we are looking for is not there.
    }
    let xSearch = dfshelper(root, 0, null, x)
    let ySearch = dfshelper(root, 0, null, y)
    
    if(xSearch[1] === ySearch[1] && xSearch[2] !== ySearch[2]) return true
    //If the depths are the same and the parents are not, return true
    return false
};

//Time = O(n) we traverse the entire tree at worst
//Space = O(n), call stack size, our return array is a constant size.