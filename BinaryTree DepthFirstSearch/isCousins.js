// most optimized

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  }
  
  var isCousins = function (root, x, y) {
    let isValid;
    let values = {};
  
    function traverse(currentNode, parent, depth) {
      if (!currentNode || isValid !== undefined) {
        return;
      }
  
      if (currentNode.value === x) {
          values.x = { parent, depth};
          console.log("values.x = ", values.x)
      }
  
      if (currentNode.val === y) {
          values.y = { parent, depth};
          console.log("values.y = ", values.y);
      }
        
      const xValues = values.x;
      const yValues = values.y;
  
      if (xValues && yValues) {
        if (xValues.depth === yValues.depth &&
          xValues.parent !== yValues.parent) {
          isValid = true;
        } else {
          isValid = false;
        }
      }
  
      traverse(currentNode.left, currentNode, depth + 1);
      traverse(currentNode.right, currentNode, depth + 1);
    }
    traverse(root, undefined, 0);
    return isValid;
  };
  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(2)
  root.right = new TreeNode(3)
  root.left.left = new TreeNode(4)
  root.right.left = new TreeNode(5)
  
  console.log(`Tree has path: ${isCousins(root, 4, 5)}`);

  
  