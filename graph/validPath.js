// Thought Process
// Questions

//const { deflateSync } = require("zlib");

// Is our graph directed/undirected?
// Insights

// We can simply exhaust all valid paths from start to end.
// Approach

// Create an adjacency list representation for our connected nodes.
// Create a set to store visited nodes.
// Run DFS (using our adjacency list) from starting node (start):
// At each stage, add to visited set.
// Retrieve edges from adjacency list, run DFS.
// Return true/false if our visited set has the end input node.
// Complexity

// Time: O(v + e)
// Space: O(v + e)

const validPath = function(n, edges, start, end) {
    //create a hashmap to store the the adjacency list of the nodes
    let graph = new Map();

    //store the visited in a set;
    let visited = new Set();

    for (let [v,e] of edges) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        }
        else {
            graph.set(v, [e])
        }

        //create the other direction;
        if(graph.has(e)) {
            graph.get(e).push(v)
        }
        else {
            graph.set(e, [v])
        }
    } 

    //use a dfs help to traverse the nodes
    const dfs = function(start) {
        //add node to visited
        visited.add(start)
        let edges = graph.get(start)
        if (edges && edges.length > 0) {
           for (let e of edges) {
              if(!visited.has(e)) dfs(e)
           }
        }   
    }
    dfs(start)
    return visited.has(end)
}
console.log(validPath(3, [[0,1],[1,2],[2,0]], 0, 2))