// @ts-nocheck
import { describe, it, expect } from 'vitest';
import postOrderSearch from '../PostOrderTraversal';
import { tree, tree1 } from './mock/tree';

describe('postOrderSearch', () => {
  it('should return the path of values in post-order traversal', () => {
    const expectedPath = [3, 7, 5, 12, 20, 15, 10];
    expect(postOrderSearch(tree1)).toEqual(expectedPath);
  });

  it('should return an array with a single value if the head is a leaf node', () => {
    const expectedPath = [10];
    expect(postOrderSearch(tree)).toEqual(expectedPath);
  });

  it('should return an empty array if the head is null', () => {
    const expectedPath = [];
    expect(postOrderSearch(null)).toEqual(expectedPath);
  });
});