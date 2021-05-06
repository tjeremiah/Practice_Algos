const numIslands = function(grid) {
    const rows = grid.length,
       cols = grid[0].length;
    if (!rows) {
        return 0;
    } 
    const num_islands = 0;
    for (let i = 0; i < rows; i++) {
       for (let j = 0; j < cols; j++) {
           if (grid[i][j] === "1") {
               num_islands += 1;
               dfs(grid, i, j)
           }
       }
    }

    const dfs = function(grid, row_x, col_y) {
        const row_length = grid.length,
         col_length = grid[0].length;
         
        grid[row_x][col_y] = 'visited';
        // check the row above (vertical)
        if (row_x - 1 >= 0 && grid[row_x - 1][col_y] === '1') {
            dfs(grid, row_x -1, col_y) 
        }
        // check the row below (vertical)
        if (row_x + 1 >= 0 && grid[row_x + 1][col_y] === '1') {
            dfs(grid, row_x + 1, col_y)
        }
        // check column on the right (horizontal)
        if (col_y + 1 >= 0 && grid[row_x][col_y + 1] === '1') {
            dfs(grid, row_x, col_y + 1)
        }
        // check column on the left (horizontal)
        if (row_x >= 0 && grid[row_x ][col_y -1] === '1') {
            dfs(grid, row_x , col_y -1 ) 
        }
    }
    return num_islands;
}