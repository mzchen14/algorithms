// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

var maxProfit = function(prices) {
    let min = Infinity //set default min
    let maxProfit = 0 //current max profit
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < min) { //if the price is smaller than the current min
            min = prices[i] //set the new price to the current min
        } else if(prices[i] - min > maxProfit) { //otherwise, if the price is greater than the min, find the difference, if the diff is greater than the current maxProfit
            maxProfit = prices[i] - min //set the max profit to the difference
        }
    }
    return maxProfit //return max profit

};

/* Time: O(n) Space = O(1) 
*/ 