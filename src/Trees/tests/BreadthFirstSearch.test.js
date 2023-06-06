// @ts-nocheck
import { describe, it, expect } from 'vitest';
import breadthFirstSearch from '../BreadthFirstSearch';
import { tree1 } from './mock/tree';

describe('breadthFirstSearch', () => {
  it('should return true if target is found in the tree', () => {
    expect(breadthFirstSearch(tree1, 7)).toBe(true);
  });

  it('should return false if target is not found in the tree', () => {
    expect(breadthFirstSearch(tree1, 8)).toBe(false);
  });

  it('should return false if the root is null', () => {
    expect(breadthFirstSearch(null, 5)).toBe(false);
  });

  it('should return false if the tree is empty', () => {
    expect(breadthFirstSearch({}, 5)).toBe(false);
  });
});