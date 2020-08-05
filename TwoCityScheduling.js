/* 
There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

 

Example 1:

Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
*/
var twoCitySchedCost = function (costs) {
  let minCost = 0; //initialize min Cost container
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1])); //sort by when traveling to city A saves the company more money than city B (cost of A - cost of B)

  let n = costs.length / 2; //half the number of people have to go to city A & half city B
  for (let i = 0; i < costs.length; i++) {
    //loop throught he entire length
    if (i < n) {
      //if the index is less than or equal to half, calculate city A price
      minCost += costs[i][0];
    } else {
      //otherwise, if it is the latter half, calculate city B price
      minCost += costs[i][1];
    }
  }
  return minCost; //return total price
};

//Time = O(n log n) (for sorting)

//Space = O(log n) for execution stack
