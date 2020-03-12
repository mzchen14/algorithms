function balancedBrackets(string) {
        let open = ['(', '{', '[']
      let closed = [')', '}', ']']
      let stack = [];
      
      for(let i = 0; i<string.length; i++) {
          if(open.includes(string[i])) {
              stack.push(string[i])
          } else {
              if(closed.includes(string[i])) {
                 if(stack.pop() !== open[closed.indexOf(string[i])]){
                                   return false;
                               }
              }
          }
      }
      return stack.length === 0;
  }

  //Key takeaway: Since we are looking for matching pairs and the closing braces must match the most recent opening brace,
  //we use a stack data structure.