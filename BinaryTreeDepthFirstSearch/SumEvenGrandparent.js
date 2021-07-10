class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }


const sumEvenGrandParent = (root) {
     let sum = 0;
     const dfs = function (currentNode, parentNode, grandParentNode) {
         if (!currentNode) {
             return;
         }
         if (grandParentNode && grandParentNode.val % 2 === 0) {
             sum += currentNode.val;
         }

         dfs (currentNode.left, currentNode, parentNode);
         dfs (currentNode.left, currentNode, parentNode);
     }

     dfs (root, null, null)
     return sum;
};

const root = new TreeNode(6);
root.left = new TreeNode(7);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(3);
root.left.left.left = new TreeNode(9);
root.left.right.left = new TreeNode(1);
root.left.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(5);

console.log(`Tree has path: ${sumEvenGrandparent(root)}`);
