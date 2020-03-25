// This is an input class. Do not edit.
class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }

  //Psuedo-code: 
    //write a function that traverses backwards up a tree and pushes the ancestors into an array.
    //run the function once on descendantOne, store the ancestors in a set.
    //while running through descendantTwo, check at each ancestor, if the ancestor is in the set
    //return if found
  
  function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {

      let currentSet = findAncestor(descendantOne) //run helper func to get the set
      let secondChild = descendantTwo //let the second child equal the second descendant
      while(secondChild.ancestor){ //while the node has an ancestor 
          if(currentSet.has(secondChild)) return secondChild //if the secondchild IS in the set, that means it's an ancestor of descendantOne, return
          if(currentSet.has(secondChild.ancestor)){ //otherwise, if they have a common ancestor, return the ancestor.
              return secondChild.ancestor
          }
          secondChild = secondChild.ancestor //move the second child up the tree as well.
      }
      return topAncestor //if no ancestors are found in the set, return the topAncestor as it is the ancestor of all the nodes.
  }
  
  function findAncestor(node){
      let current = node //set current to the node passed in
      let setA = new Set() //create a new set of Ancestors
      setA.add(current) //add current in case the current Node is an ancesstor of descendantTwo
      while (current.ancestor){ //while current node has an ancestor (so it is not the top node yet)
          setA.add(current.ancestor); //add the ancestor onto the set
          current = current.ancestor //move current to the ancestor node
      }
      return setA //return the set after creation.
  }
  
  //Time: O(n), Space: O(n) *--Set creation