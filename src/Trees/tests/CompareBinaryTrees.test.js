// @ts-nocheck
import { describe, it, expect } from 'vitest';
import compare from '../CompareBinaryTrees';
import { tree, tree1, tree2 } from './mock/tree';

describe('compare', () => {
  it('should return true for equality structural and value binary trees', () => {
    expect(compare(tree1, tree1)).toBe(true);
  });

  it('should return false for different value binary trees', () => {
    expect(compare(tree1, tree2)).toBe(false);
  });

  it('should return false for different structural binary trees', () => {
    expect(compare(tree1, tree)).toBe(false);
  });

  it('should return true for two empty binary trees', () => {
    expect(compare(null, null)).toBe(true);
  });

  it('should return false when one binary tree is empty and the other is not', () => {
    expect(compare(null, tree)).toBe(false);
  });
});