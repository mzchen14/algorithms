/*You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1 */
 
//Bottom Up Approach
var coinChange = function(coins, amount) {
    let minsArr = [] //initialize an array to store all the minimum counts (from 0 to the amount)
    minsArr[0] = 0 //the number of coins needed to make 0 is 0.
	for(let i = 1; i < amount+1; i++) { 
		minsArr[i] = Infinity //set the defaults to infinity
	}

	for(let i = 1; i < minsArr.length; i++) { //looping through the minArr
		coins.forEach(num => { //for each coin in the coins array
			if(num <= i) { //check if the coin is less than the index/amount
                minsArr[i] = Math.min(minsArr[i-num] + 1, minsArr[i]) //if so, 
                //the minimum will be equal to the previous minimum using the last coin (minsArr[i]/Infinity if its the first time)
                //OR it will be equal to minArrs[i-num], which is the 'amount' - the coin, so the remainder if we were to use that coin
                //this would give us a min that will hopefully already be in our array, so if we access the location, we have an immediate
                //Min for that remainder
			}
		})
	}
	return minsArr[amount] !== Infinity ? minsArr[amount] : -1 //if minsArr[amount] is not Infinity anymore, that means we've found a min number of coins, otherwise return -1
};

//Time = O(A*C) (A being the amount and C being the coins)
//Space = O(A) 