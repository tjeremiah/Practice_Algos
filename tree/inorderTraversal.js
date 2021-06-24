//Given the root of a binary tree, return the inorder traversal of its nodes' values.

//Input: root = [1,null,2,3]
//Output: [1,3,2]

// interative solution using a Stack
const inorderTraversal = root => {
     if(root === null) {
         return [];
     }
     let stack = [];
     let result = [];

     stack.push(root)
     while(stack.length) {
         let node = stack[stack.length -1];
         if(node.left) {
             stack.push(node.left);
             node.left = null;
         }
         else {
            result.push(stack.pop().val)
            if(node.right) {
              stack.push(node.right)
            }
        }   
     } 
     return result;
}

//recursion

const inorderTraversal = root => {
    let result = [];
    if(root){
        const traverseInorder = root => {
            if(root.left){
                traverseInorder(root.left)
            }
            result.push(root.val)
            if(root.right) {
                traverseInorder(root.right)
            }
        }
        traverseInorder(root)
    }
    return result;
}