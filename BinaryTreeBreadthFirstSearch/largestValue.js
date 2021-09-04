//Find Largest Value in Each Tree Row
//Given the root of a binary tree, return an array of the largest value 
//in each row of the tree (0-indexed).

const largestValues = (root) => {
    if(root === null) {
        return [];
    }
    
    let stack = [];
    let current, level;
    
    stack.push([root, 0])

    while(stack > 0) {
        [current, level] = stack.pop();
        
        //compare against result
        if(result[level] === undefined) {
            result[level] = current.val
        }
        else if(current.val > result[level]) {
                result[level] = current.val;
       }

       //add children to the stack
       if(current.left !== null) {
          stack.push([current.left, level + 1]) 
       }
       if(current.right !== null) {
           stack.push([current.right, level + 1])
       }
    }
    return result;
}