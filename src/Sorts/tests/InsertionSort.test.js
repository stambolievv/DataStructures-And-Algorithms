// @ts-nocheck
import { describe, it, expect } from 'vitest';
import insertionSort from '../InsertionSort';

describe('insertionSort', () => {
  it('should sort an array of numbers in ascending order', () => {
    const array = [4, 2, 7, 1, 5, 3, 6];
    const result = insertionSort(array);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should handle an empty array', () => {
    const array = [];
    const result = insertionSort(array);

    expect(result).toEqual([]);
  });

  it('should handle an array with a single element', () => {
    const array = [1];
    const result = insertionSort(array);

    expect(result).toEqual([1]);
  });

  it('should handle an array with duplicate elements', () => {
    const array = [4, 2, 7, 1, 5, 3, 6, 4];
    const result = insertionSort(array);

    expect(result).toEqual([1, 2, 3, 4, 4, 5, 6, 7]);
  });

  it('should handle an already sorted array', () => {
    const array = [1, 2, 3, 4, 5];
    const result = insertionSort(array);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle a large array', () => {
    const array = [];
    const size = 10000;

    for (let i = size; i > 0; i--) {
      array.push(i);
    }

    const result = insertionSort(array);

    expect(result).toEqual([...Array(size).keys()].map((num) => num + 1));
  });
});