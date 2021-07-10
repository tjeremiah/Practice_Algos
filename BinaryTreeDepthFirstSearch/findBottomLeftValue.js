const findBottomLeftValue = function(root) {
     let val = root.val;
     let maxLevel = -1

     const searchLeftValue = function(currentNode, level) {
          if (currentNode === null) return;
          if(level > maxLevel) {
              maxLevel = level;
              val = currentNode.val;
          }

          if (currentNode.left) {
               searchLeftValue(currentNode.left, level + 1)
          } 
          if (currentNode.right) {
              searchLeftValue(currentNode.right, level + 1)
          }    
     }
     searchLeftValue(root, 0)

     return val;
};