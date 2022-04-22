// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two 
//nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges 
// between them.

const diameterOfBinaryTree = (root) => {
    let result = 0;

    const dfs = (root) => {
        if(root === null) {
            return -1;
        }
        let left = dfs(root.left);
        let right = dfs(root.right);
        //find the diameter of the current node
        result = Math.max(result, 2 + left + right)
        
        return 1 + Math.max(left, right) // return the height of the tree;
    }
}

