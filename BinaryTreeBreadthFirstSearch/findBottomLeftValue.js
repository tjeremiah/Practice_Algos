const findBottomLeftValue = function(root) {
    if (root === null) {
        return;
    }
    const queue = [],
     level = [];  //temp holder for the queue on the BST for each level
    let leftMost = root;
    queue.push(root);

    while (queue.length > 0) {
        let currentNode = queue.shift();
        if (currentNode.left !== null) {
           level.push(currentNode.left)
        }
        if (currentNode.right !== null) {
            level.push(currentNode.right)
        }

        if (queue.length < 0 && level.length > 0) {
            queue = level;
            leftmost = level[0];  //first node on that level
            level = []; //set level back to empty for the next level;
        }
    }
    return leftMost.val;

}