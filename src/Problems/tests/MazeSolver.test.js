// @ts-nocheck
import { describe, it, expect } from 'vitest';
import solve from '../MazeSolver';

describe('solve', () => {
  it('should find a path from start to end in a valid maze', () => {
    const maze = [
      ['S', ' ', ' ', ' ', ' ', 'W'],
      ['W', 'W', 'W', 'W', ' ', 'W'],
      [' ', ' ', 'W', ' ', ' ', ' '],
      [' ', ' ', ' ', 'W', ' ', 'W'],
      ['W', 'W', ' ', ' ', ' ', 'E'],
    ];
    const wall = 'W';
    const start = { x: 0, y: 0 };
    const end = { x: 5, y: 4 };

    const result = solve(maze, wall, start, end);

    expect(result).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 1 },
      { x: 4, y: 2 },
      { x: 4, y: 3 },
      { x: 4, y: 4 },
      { x: 5, y: 4 },
    ]);
  });

  it('should return an empty path if no valid path is found', () => {
    const maze = [
      ['S', 'W'],
      ['W', 'E'],
    ];
    const wall = 'W';
    const start = { x: 0, y: 0 };
    const end = { x: 1, y: 1 };

    const result = solve(maze, wall, start, end);

    expect(result).toEqual([]);
  });

  it('should handle a maze with a single cell', () => {
    const maze = [['E']];
    const wall = 'W';
    const start = { x: 0, y: 0 };
    const end = { x: 0, y: 0 };

    const result = solve(maze, wall, start, end);

    expect(result).toEqual([{ x: 0, y: 0 }]);
  });

  it('should handle a maze with no walls', () => {
    const maze = [
      ['S', ' ', ' ', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'E'],
    ];
    const wall = 'W';
    const start = { x: 0, y: 0 };
    const end = { x: 3, y: 3 };

    const result = solve(maze, wall, start, end);

    expect(result).toEqual([
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
      { x: 1, y: 3 },
      { x: 1, y: 2 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: 1 },
      { x: 2, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 3 }
    ]);
  });

  it('should handle a maze with multiple valid paths', () => {
    const maze = [
      ['S', ' ', ' ', ' ', 'W'],
      ['W', ' ', 'W', ' ', 'W'],
      ['W', ' ', 'W', ' ', 'W'],
      ['W', ' ', ' ', ' ', 'E'],
    ];
    const wall = 'W';
    const start = { x: 0, y: 0 };
    const end = { x: 4, y: 3 };

    const result = solve(maze, wall, start, end);

    expect(result).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 3 },
      { x: 2, y: 3 },
      { x: 3, y: 3 },
      { x: 4, y: 3 }
    ]);
  });
});
