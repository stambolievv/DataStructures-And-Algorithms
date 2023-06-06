// @ts-nocheck
import { describe, it, expect } from 'vitest';
import depthFirstSearch from '../DepthFirstSearch';
import { tree1 } from './mock/tree';

describe('depthFirstSearch', () => {
  it('should return true if target is found in the tree', () => {
    expect(depthFirstSearch(tree1, 7)).toBe(true);
  });

  it('should return false if target is not found in the tree', () => {
    expect(depthFirstSearch(tree1, 8)).toBe(false);
  });

  it('should return false if the tree is null', () => {
    expect(depthFirstSearch(null, 5)).toBe(false);
  });

  it('should return false if the tree is empty', () => {
    expect(depthFirstSearch({}, 3)).toBe(false);
  });
});