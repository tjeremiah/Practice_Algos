const AllPathSourceTarget = (graph) => {
    let result = [];
    let lastNode = graph.length -1;
    
    const dfs_AllPath = (node, currentPath, result) => {
           if(node === lastNode) {
              result.push([...currentPath]); //add all paths to result;
              //console.log("currentPath:", currentPath)
           }
            
           for(let next of graph[node]) {
               currentPath.push(next)
               dfs_AllPath(next, currentPath, result)
               currentPath.pop()
           } 
    }  
    dfs_AllPath(0, [0], result )
    return result;
}  

console.log(AllPathSourceTarget([[1,2],[3],[3],[]]))

// const allPathSourceTarget = (root) => {
//     let allPaths = [];
     
//     allPath_recurse(root, [], allPath)
     
//     return allPaths;

// }

// const allPath_recurse = (currentNode, currentPath, allPath) {
  
//       if(currentNode === null) {
//         return currentPath;
      
//       }  
//       currentPath.push(currentNode.val);
      
//       if(currentNode.left === null && currentNode.right === null) {
          
//         let currentPath_copy = currentPath.join('->')
//         allPath.push(currentPath.copy);
      
//       }
//       else {
//           allPath_recurse = (currentNode.left, currentPath, allPath)
//           allPath_recurse = (currentNode.right, currentPath, allPath)
      
//       }
//       currentPath.pop()
      


// }  


