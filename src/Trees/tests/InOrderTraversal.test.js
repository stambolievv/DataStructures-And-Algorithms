// @ts-nocheck
import { describe, it, expect } from 'vitest';
import inOrderSearch from '../InOrderTraversal';
import { tree, tree1 } from './mock/tree';

describe('inOrderSearch', () => {
  it('should return the path of values in in-order traversal', () => {
    const expectedPath = [3, 5, 7, 10, 12, 15, 20];
    expect(inOrderSearch(tree1)).toEqual(expectedPath);
  });

  it('should return an array with a single value if the head is a leaf node', () => {
    const expectedPath = [10];
    expect(inOrderSearch(tree)).toEqual(expectedPath);
  });

  it('should return an empty array if the head is null', () => {
    const expectedPath = [];
    expect(inOrderSearch(null)).toEqual(expectedPath);
  });
});