// @ts-nocheck
import { describe, it, expect } from 'vitest';
import binarySearch from '../BinarySearch';

describe('binarySearch', () => {
  it('should return true if target is found in the array', () => {
    const array = [2, 4, 6, 8, 10, 12];
    const target = 6;
    expect(binarySearch(array, target)).toBe(true);
  });

  it('should return false if target is not found in the array', () => {
    const array = [2, 4, 6, 8, 10, 12];
    const target = 5;
    expect(binarySearch(array, target)).toBe(false);
  });

  it('should return false if the array is empty', () => {
    const array = [];
    const target = 5;
    expect(binarySearch(array, target)).toBe(false);
  });

  it('should return true if target is the first element in the array', () => {
    const array = [5, 10, 15, 20];
    const target = 5;
    expect(binarySearch(array, target)).toBe(true);
  });

  it('should return true if target is the last element in the array', () => {
    const array = [5, 10, 15, 20];
    const target = 20;
    expect(binarySearch(array, target)).toBe(true);
  });

  it('should return true if the target is found multiple times in the array', () => {
    const array = [1, 2, 2, 3, 4, 5];
    const target = 2;
    expect(binarySearch(array, target)).toBe(true);
  });
});