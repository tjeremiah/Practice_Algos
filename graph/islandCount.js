// island count
// Write a function, islandCount, that takes in a grid containing Ws 
// and Ls. W represents water and L represents land. The function 
// should return the number of islands on the grid. An island is a 
// vertically or horizontally connected region of land.

const islandCount = (grid) => {
    let row = grid.length;
    let col = grid[0].length;
    let visited = new Set();
    let count = 0;
    
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
          if ( explore(grid, r, c, visited)) count++;
        }
    }
    return count;
};

const explore = (grid, r, c, visited) => {
    let rowInBound = 0 <= r && r < grid.length;
    let colInBound = 0 <= c && c < grid[0].length;
    if (!rowInBound || !colInBound) return false;

    if (grid[r][c] === 'W') return false;

    let pos = r + ',' + c;
    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r -1, c, visited)
    explore(grid, r + 1, c, visited)
    explore(grid, r, c -1, visited)
    explore(grid, r, c+ 1, visited)

    return true;
}
console.log(islandCount([
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ]))