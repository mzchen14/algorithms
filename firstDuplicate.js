/* Given an array a that contains only numbers in the range 
from 1 to a.length, find the first duplicate number for which 
the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, 
return the number for which the second occurrence has a smaller index than the second occurrence 
of the other number does. If there are no such elements, return -1.*/

function firstDuplicate(a) {
    let set = new Set(); //create a set to track only unique elements
    for(let i = 0; i < a.length; i++) { //loop through the array
        if(set.has(a[i])){ //if the set already includes the element, return that element.
            return a[i]; //since we are looping through the array in order, the first return would be the first dup.
        } else {
            set.add(a[i]); //otherwise, add it into the set.
        }
    }
    return -1; //if no dupes are found, return -1
}

//Time = O(n), Space = O(n)