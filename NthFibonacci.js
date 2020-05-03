
/* The fibonacci sequence is defined as follows:
The first num is 0, the second num is 1, and the nth number is the sum of (n-1)th and (n-2)th numbers. Write a function that
takes an integer n and returns the nth Fibonacci number
Important Note: The Fibonacci sequence is often defined with the first two numbers as F0 = 0, F1 = 1. For the purpose of this question,
the first Fibonacci number is F0; therefore getNthFib(1) is equal to F0, getNthFib(2) = F1...etc*/
function getNthFib(n) {
    // Write your code here.
      let lastTwoFibs = [0, 1]
      if(n === 1) return 0
      if(n === 2) return 1
      let currentFib
      for(let i = 3; i <= n; i++) {
          currentFib = lastTwoFibs[0] + lastTwoFibs[1]
          lastTwoFibs[0] = lastTwoFibs[1]
          lastTwoFibs[1] = currentFib
      }
      return currentFib
  }

  //Time Complexity: O(n), Space = O(1)
  /* Approach:
  Store the last two numbers in an array, update them as you increment i up until the n passed in
  */