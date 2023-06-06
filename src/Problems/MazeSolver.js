const direction = [
  [0, 1],  // UP
  [-1, 0], // LEFT
  [0, -1], // DOWN
  [1, 0],  // RIGHT
];

/**
 * @description Solves a maze by finding a path from the start point to the end point.
 * @param {string[][]} maze - The maze represented as a 2D array of strings.
 * @param {string} wall - The string representation of a wall in the maze.
 * @param {Point} start - The starting point in the maze.
 * @param {Point} end - The ending point in the maze.
 * @returns {Point[]} - The array of points representing the path from start to end in the maze. Returns an empty array if no path is found.
 * @summary The function uses a recursive approach to solve the maze. It performs a depth-first search by exploring neighboring cells in four directions (up, left, down and right) until it reaches the end point or encounters a wall. The function keeps track of visited cells to avoid revisiting them. If a valid path is found, it is stored in the `path` array. The function returns the path as an array of points or an empty array if no path is found.
 */
export default function solve(maze, wall, start, end) {
  const path = [];
  const visited = new Array(maze.length).fill().map(() => new Array(maze[0].length).fill(false));

  walk(maze, wall, start, end, visited, path);

  return path;
}

/**
 * @description Recursively explores the maze to find a path from the current point to the end point.
 * @param {string[][]} maze - The maze represented as a 2D array of strings.
 * @param {string} wall - The string representation of a wall in the maze.
 * @param {Point} current - The current point in the maze.
 * @param {Point} end - The ending point in the maze.
 * @param {boolean[][]} visited - A 2D array indicating whether each cell has been seen.
 * @param {Point[]} path - The array representing the current path from start to current point.
 * @returns {boolean} - Indicates whether a valid path is found from the current point to the end point.
 */
function walk(maze, wall, current, end, visited, path) {
  // Check if off the maze
  if (current.x < 0 || current.x >= maze[0].length || current.y < 0 || current.y >= maze.length) {
    return false;
  }

  // Check if on a wall
  if (maze[current.y][current.x] === wall) {
    return false;
  }

  // Check if at the end
  if (current.x === end.x && current.y === end.y) {
    path.push(end);
    return true;
  }

  // Check if seen
  if (visited[current.y][current.x]) {
    return false;
  }

  // pre
  visited[current.y][current.x] = true;
  path.push(current);

  // recurse
  for (let i = 0; i < direction.length; ++i) {
    const [x, y] = direction[i];
    const nextX = current.x + x;
    const nextY = current.y + y;

    if (walk(maze, wall, { x: nextX, y: nextY }, end, visited, path)) return true;
  }

  // post
  path.pop();

  return false;
}

/**
 * @typedef {object} Point - Represents a point in a two-dimensional space.
 * @property {number} x - The x-coordinate of the point.
 * @property {number} y - The y-coordinate of the point.
 */