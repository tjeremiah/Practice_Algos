// Write a function, hasCycle, that takes in an object representing the 
// adjacency list of a directed graph. The function should return a 
// boolean indicating whether or not the graph contains a cycle.

const hasCycle = (graph) => {
    const visited = new Set();
    const visiting = new Set();
    
    for (let node in graph) {
        if(traverse(graph, node, visited, visiting)) return true
    }
    return false;
};

const traverse = (graph, current, visited, visiting) => {
    if (visited.has(current)) return false;

    if (visiting.has(current)) return true;

    visiting.add(current)

    for (let neighbor of graph[current]) {
        if (traverse(graph, current, visited, visiting)) return true;
    }
    visiting.delete(current);
    visited.add(current)
    
    return false;
}

console.log(hasCycle({
    a: ["b"],
    b: ["c"],
    c: ["a"],
  }));