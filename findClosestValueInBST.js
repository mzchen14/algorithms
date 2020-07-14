	//set a current equal to the root node
	//set variable for closest value
	//traverse the BST while the tree node is not equal to null.
	//compare how close the current node is vs. the last closest value
	//if the current node is < target , go right 
	//if the current node is > target , go left
	//return the closest

function findClosestValueInBst(tree, target) {
	let current = tree
	let closest = Infinity
	if (current === target) return current
	while(current) {
		if(Math.abs(current.value - target) < Math.abs(closest - target)) {
			closest = current.value
		}
		if(current.value < target) {
			current = current.right
		} else {
			current = current.left
		}
	}
	return closest
}
//Time = O(n) Space = O(1)
/* 7/12

When working with problems where you need to find the max or min, it may be a good idea
to keep tracak of the current max/min!

The benefit of doing this problem iteratively is that there space is constant since there is no
callstack, you are only storing "closest" variable.
*/