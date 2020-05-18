/* 
Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 

Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
*/
var minRemoveToMakeValid = function(s) {
    let set = new Set()
    let stack = []
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push(i) // if the character is an open parenthesis, add the index to the stack
        }
        if(s[i] === ')') { //if the character is a closed parenthesis
            if(!stack.length) { //if the stack is empty, there was no open brace to match so we want to remove the closed parenthesis
                set.add(i) //add it to our set to remove
            } else { 
                stack.pop() //otherwise, if there was an open parenthesis to match, we pop it off the stack
            }
        }
    } 
    
    //To handle open parenthesis indices that may be still on the stack
    while(stack.length) { //if there are any indices left on our stack
        set.add(stack.pop()) //add them to our set of indices to remove
    }
    
    let result = [] //create a result arr to store our answer. We want to use an array because appending is a O(1) action but strings are immutable.
    
    for(let i = 0; i < s.length; i++) { 
        if(!set.has(i)) { //if the index is NOT the set of indices we are skipping over, 
            result.push(s[i]) //push it into our result array
        }
    }
    return result.join('') //return the result array as a string
};


//Faster O(3n):
var minRemoveToMakeValid = function(str) {

    str = str.split(""); //convert string into array because we are going to manipulate it
	let stack = []; //create a stack
    for(let i = 0; i<str.length; i++){
        if(str[i]==="(") //if it is an open brace, add to stack
            stack.push(i);
        else if(str[i]===")"){ //if it is a closing brace,
            if(stack.length) stack.pop(); //if the stack has length, we pop from the stack
            else str[i]=""; //otherwise, chance that element to an empty string
        }
    }
    
    for(let i of stack) str[i] = ""; // the stack still has indices we change them in our string array to empty strings
    
    return str.join(""); //return the string array converted back to a string
	
}

/* Approach:
Using a stack implementation:
If stack is empty and we encounter a closing bracket, we need to remove it.
If there are brackets remaining by the end of the string, we need to remove them.

First iteration to count the indices we must remove.
Second iteration, build the string again, skipping the indices that we wanted to remove.

Time = O(n), we essentially have 4 loops, first to add/remove from stack O(n), next we add any excess items from the stack to our set O(n), next we build our string O(n), and finally we perform a join O(n). So our time complexity would be O(4n), since 4 is a constant we can drop it.
Space = O(n)
*/

