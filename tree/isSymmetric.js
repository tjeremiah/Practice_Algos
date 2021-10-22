//Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its 
//  center).

class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    
    }   
 }  
 
 var isSymmetric = function(root) {
       if(root === null) {
          return null
       } 
 
       const isMirror = function(root1, root2) {
             if(root1 === null &&  root2 === null) {
                return true;
             }
             if(root1 === null || root2 === null) {
                return false;
              }
 
              return (root1.val === root2.val && isMirror(root1.right, root2.left)
                  && isMirror(root1.left, root2.right))
       }
 
       return isMirror(root.left, root.right)
     
 };
 
 const root = new Node(1);
 root.left = new Node(2);
 root.right = new Node(2);
 root.left.left = new Node(3)
 root.left.right = new Node(4);
 root.right.right = new Node(3);
 root.right.left = new Node(4);
 
 console.log(isSymmetric(root))
 