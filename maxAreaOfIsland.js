var maxAreaOfIsland = function (grid) {
  let result = { count: 0 };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        checkIsland(grid, i, j, result);
      }
    }
  }
  return result.count;
};

const checkIsland = (grid, i, j, result, area = { count: 0 }) => {
  if (!grid[i] || !grid[i][j]) return;
  result.count = Math.max(result.count, (area.count += grid[i][j]));
  if (grid[i][j] === 1) {
    grid[i][j] = 0;
  }
  checkIsland(grid, i + 1, j, result, area);
  checkIsland(grid, i - 1, j, result, area);
  checkIsland(grid, i, j + 1, result, area);
  checkIsland(grid, i, j - 1, result, area);
};
