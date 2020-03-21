var isPalindrome = function(head) {
    let arr = [] //declare a new array
    let current = head //set the current to the head of the linkedlist
    while(current) { //while current is not null
        arr.push(current.val) //push the value into the array
        current = current.next //increment the current
    }

    let i = 0; //set i as beginning pointer
    let j = arr.length-1 //set j as ending pointer
    while(i < j) { //while i is less than j
        if(arr[i] !== arr[j]) { //if the char at arr[i] is not equal to arr[j], it is not a palindrome, return false
            return false
        } else { //otherwise
            i++; //continue to increment i & j
            j--;
        }
    }
    return true //return true at the end if the loop never returns false
};

//Time = O(2n) => O(n), two loops
//Space = O(n) => 1 array storage