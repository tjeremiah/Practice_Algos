/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

 const getPath = (root, target) => {
    const stack = [];
    stack.push([root, [root]]);
  
    let current, path;
  
    while (stack.length > 0) {
      [current, path] = stack.pop();
  
      if (current === target) {
        return path;
      }
  
      if (current.left !== null) {
        stack.push([current.left, path.concat(current.left)]);
      }
      if (current.right !== null) {
        stack.push([current.right, path.concat(current.right)]);
      }
    }
  }
  
  const printPath = (path) => {
    for (let node of path) {
      console.log(node.val);
    }
  }
  
  var lowestCommonAncestor = function(root, p, q) {
    let pathP = getPath(root, p);
    let pathQ = getPath(root, q);
  
    console.log("PATH P: ");
    printPath(pathP);
    console.log("PATH Q: ");
    printPath(pathQ);
  
    let i = 0;
  
    while (i < pathP.length && i < pathQ.length) {
      if (pathP[i] !== pathQ[i]) {
        return pathP[i - 1];
      }
      i++;
    }
  
    if (i >= pathP.length) {
      return pathP[i - 1];
    } else {
      return pathQ[i - 1];
    }
  };
  
  
  
  /*
  
  
                          3
                  /                \
                 5                   1
              /      \            /      \
            6         2          0        8
  
  
  -------------------------------------------------
  | [5, [(3),(5)]]     [1, [(3),(1)]]
  -------------------------------------------------
  
  [3, [(3)]]
  
  */


//   **
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const getPath = (root, target) => {
  const stack = [];
  stack.push([root, [root]]);

  let current, path;

  while (stack.length > 0) {
    [current, path] = stack.pop();

    if (current === target) {
      return path;
    }

    if (current.left !== null) {
      stack.push([current.left, path.concat(current.left)]);
    }
    if (current.right !== null) {
      stack.push([current.right, path.concat(current.right)]);
    }
  }
}

const printPath = (path) => {
  for (let node of path) {
    console.log(node.val);
  }
}

var lowestCommonAncestor = function(root, p, q) {
  let pathP = getPath(root, p);
  let pathQ = getPath(root, q);

  console.log("PATH P: ");
  printPath(pathP);
  console.log("PATH Q: ");
  printPath(pathQ);

  let i = 0;

  while (i < pathP.length && i < pathQ.length) {
    if (pathP[i] !== pathQ[i]) {
      return pathP[i - 1];
    }
    i++;
  }

  if (i >= pathP.length) {
    return pathP[i - 1];
  } else {
    return pathQ[i - 1];
  }
};



/*


                        3
                /                \
               5                   1
            /      \            /      \
          6         2          0        8


-------------------------------------------------
| [5, [(3),(5)]]     [1, [(3),(1)]]
-------------------------------------------------

[3, [(3)]]

*/