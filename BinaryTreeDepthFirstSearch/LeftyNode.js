// Write a function, leftyNodes, that takes in the root of a binary tree. 
// The function should return an array containing the left-most value on every level of 
// the tree. The array must be ordered in a top-down fashion where the root
//  is the first element.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leftyNodes = (root) => {
    // todo
    const result = [];
    
    const leftyNodes_dfs = (root, level) => {
      if (root === null) return;
      
      if(result.length === level ) result.push(root.val)
      
      leftyNodes_dfs(root.left, level + 1)
      leftyNodes_dfs(root.right, level + 1)
       
      
    }
  
     leftyNodes_dfs(root, 0)
     return result;
  };