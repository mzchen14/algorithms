let grid = [
  [[5], [3], [7], [8], [10], [-2], [4]],
  [[22], [11], [17], [-8], [-10], [16], [29]],
  [[5], [3], [51], [22], [10], [-2], [-4]],
  [[9], [4], [2], [9], [10], [-2], [-13]],
  [[18], [-3], [-11], [-2], [17], [-2], [65]],
  [[81], [43], [-6], [12], [10], [-2], [17]],
  [[1], [44], [6], [14], [12], [-7], [19]],
];

const borders = (grid) => {
  let length = Math.floor(grid[0].length / 2); //the number of layers inwards
  for (let i = 0; i < length; i++) {
    reassign(grid, i);
  }
  return grid;
};

const reassign = (grid, depth) => {
  let min = depth;
  let max = grid[0].length - (depth + 1);
  let values = [];
  let coords = [];

  traverse(grid, min, max, values, coords);
  values = values.sort((a, b) => b - a);

  coords.forEach((el) => {
    i = el[0];
    j = el[1];
    grid[i][j] = values.pop();
  });
};

const traverse = (grid, min, max, values, coords) => {
  for (let j = min; j <= max; j++) {
    coords.push([min, j]);
    values.push(grid[min][j]);
  }
  for (let i = min + 1; i <= max; i++) {
    coords.push([i, max]);
    values.push(grid[i][max]);
  }
  for (let j = max - 1; j >= min; j--) {
    coords.push([max, j]);
    values.push(grid[max][j]);
  }
  for (let i = max - 1; i > min; i--) {
    coords.push([i, min]);
    values.push(grid[i][min]);
  }
};

console.log(borders(grid));
