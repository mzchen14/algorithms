var invalidTransactions = function (transactions) {
  /* 
A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
Each transaction string transactions[i] consists of comma separated values representing the name, time (in minutes), amount, and city of the transaction.

Given a list of transactions, return a list of transactions that are possibly invalid.  You may return the answer in any order.
*/

  //name, time, price, city
  //using a set to avoid dupes for transactions over 1000 and with less than 60 min in between

  let invalid = new Set();
  //array to hold the details as objects
  let details = [];
  transactions.forEach((str) => {
    let [name, time, price, city] = str.split(",");
    details.push({ name, time, price, city, raw: str }); //we need the draw to add into our invalid set
  });

  //sort the details for ascending times
  details.sort((a, b) => Number(a.time) - Number(b.time));

  //if the transaction price is greater than 1000, add it to the invalid
  details.forEach((trans) => {
    if (trans.price > 1000) {
      invalid.add(trans.raw);
    }
  });

  //loop through all the transactions
  for (let i = 0; i < details.length - 1; i++) {
    let current = details[i];
    let next = i + 1;

    //since our transactions are sorted in time order, we need a while loop in case there is a transaction later on from the same name.
    while (next < details.length && details[next].time - current.time <= 60) {
      //we can use the time check since if our transactions list is sorted by time, we can stop our loop if the time diff exceeds 60 since the following time will definitely be valid.

      if (
        current.name == details[next].name &&
        current.city !== details[next].city
      ) {
        invalid.add(current.raw);
        invalid.add(details[next].raw);
      }
      next++;
    }
  }
  return [...invalid];
};

//Time = O(n^2) our nested loop, Space = O(n)
