/* Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.*/

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

    // Check if we're serving orders first-come, first-served
    //Loop through dine in orders and take out order and have pointers for both
    //check if the order in served is the current index of either one
    //and then increment that specific pointer, otherwies it is false
    
    
    let i = 0; //takeOut
    let j = 0; //dineIn
    let s = 0; //servedOrders
    //if(!takeOutOrders.length) return dineInOrders.join('') === servedOrders.join('')
    //if(!dineInOrders.length) return takeOutOrders.join('') === servedOrders.join('')
            // Needed the joins in order to compare since arrays are pass by reference.
            //However, decided to use the strategy in lines 30-31 instead to save space. 
    if(takeOutOrders.length + dineInOrders.length !== servedOrders.length) return false
            //This line will also be caught in the loop, but can also be added for early catch
    while(s < servedOrders.length) {
      if(servedOrders[s] === takeOutOrders[i]) {
        i++ 
      } else if(servedOrders[s] === dineInOrders[j]) {
        j++
      } else {
        return false
      }
      s++
    }
    if(i !== takeOutOrders.length || j !== dineInOrders.length) {
      return false
    }
    return true;
  }
  
  
  
  //Time = O(n) , Space = O(1)