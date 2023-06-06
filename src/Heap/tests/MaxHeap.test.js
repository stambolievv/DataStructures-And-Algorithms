// @ts-nocheck
import { describe, it, expect } from 'vitest';
import MaxHeap from '../MaxHeap';

describe('MaxHeap', () => {
  it('should insert values into the heap', () => {
    const heap = new MaxHeap();

    heap.insert(5);
    heap.insert(3);
    heap.insert(8);
    heap.insert(1);

    expect(heap.delete()).toBe(8);
    expect(heap.delete()).toBe(5);
    expect(heap.delete()).toBe(3);
    expect(heap.delete()).toBe(1);
  });

  it('should delete the maximum element from the heap', () => {
    const heap = new MaxHeap();

    heap.insert(5);
    heap.insert(3);
    heap.insert(8);
    heap.insert(1);

    expect(heap.delete()).toBe(8);

    heap.insert(2);
    heap.insert(4);
    heap.insert(6);

    expect(heap.delete()).toBe(6);
    expect(heap.delete()).toBe(5);
    expect(heap.delete()).toBe(4);
    expect(heap.delete()).toBe(3);
    expect(heap.delete()).toBe(2);
    expect(heap.delete()).toBe(1);
  });

  it('should handle an empty heap', () => {
    const heap = new MaxHeap();

    expect(heap.delete()).toBe(-1);
  });

  it('should handle inserting duplicate values', () => {
    const heap = new MaxHeap();

    heap.insert(5);
    heap.insert(3);
    heap.insert(8);
    heap.insert(3);
    heap.insert(1);
    heap.insert(5);

    expect(heap.delete()).toBe(8);
    expect(heap.delete()).toBe(5);
    expect(heap.delete()).toBe(5);
    expect(heap.delete()).toBe(3);
    expect(heap.delete()).toBe(3);
    expect(heap.delete()).toBe(1);
  });

  it('should handle deleting from a heap with one element', () => {
    const heap = new MaxHeap();

    heap.insert(5);

    expect(heap.delete()).toBe(5);
    expect(heap.delete()).toBe(-1);
  });
});