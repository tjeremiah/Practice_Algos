// Given the root node of a binary search tree and two integers low and high, 
// return the sum of values of all nodes with a value in the inclusive range [low, high].

// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

const rangeSumBST = function(root, low, high) {
   let sum = 0; 
    const dfs = (root) => {
        if(root === null) {
            return sum;
        }
        if((root.val >= low) && (root.val <= high)) {
            sum += root.val
        }
        if(root.left) {
           dfs(root.left)
        }
        if(root.right) {
            dfs(root.right)
        }
    }
    dfs(root)
    return sum;
}