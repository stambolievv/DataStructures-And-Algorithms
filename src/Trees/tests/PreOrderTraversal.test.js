// @ts-nocheck
import { describe, it, expect } from 'vitest';
import preOrderSearch from '../PreOrderTraversal';
import { tree, tree1 } from './mock/tree';

describe('preOrderSearch', () => {
  it('should return the path of values in pre-order traversal', () => {
    const expectedPath = [10, 5, 3, 7, 15, 12, 20];
    expect(preOrderSearch(tree1)).toEqual(expectedPath);
  });

  it('should return an array with a single value if the head is a leaf node', () => {
    const expectedPath = [10];
    expect(preOrderSearch(tree)).toEqual(expectedPath);
  });

  it('should return an empty array if the head is null', () => {
    const expectedPath = [];
    expect(preOrderSearch(null)).toEqual(expectedPath);
  });
});