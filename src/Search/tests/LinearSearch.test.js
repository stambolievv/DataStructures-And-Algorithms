// @ts-nocheck
import { describe, it, expect } from 'vitest';
import linearSearch from '../LinearSearch';

describe('linearSearch', () => {
  it('should return true if the target is present in the array', () => {
    const array = [1, 2, 3, 4, 5];
    const target = 3;
    expect(linearSearch(array, target)).toBe(true);
  });

  it('should return false if the target is not present in the array', () => {
    const array = [1, 2, 3, 4, 5];
    const target = 6;
    expect(linearSearch(array, target)).toBe(false);
  });

  it('should return false for an empty array', () => {
    const array = [];
    const target = 1;
    expect(linearSearch(array, target)).toBe(false);
  });

  it('should return true if the target is found at the first index', () => {
    const array = [1, 2, 3, 4, 5];
    const target = 1;
    expect(linearSearch(array, target)).toBe(true);
  });

  it('should return true if the target is found at the last index', () => {
    const array = [1, 2, 3, 4, 5];
    const target = 5;
    expect(linearSearch(array, target)).toBe(true);
  });

  it('should return true if the target is found multiple times in the array', () => {
    const array = [1, 2, 2, 3, 4, 5];
    const target = 2;
    expect(linearSearch(array, target)).toBe(true);
  });
});