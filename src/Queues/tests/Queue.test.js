// @ts-nocheck
import { describe, it, expect } from 'vitest';
import Queue from '../Queue';

describe('Queue', () => {
  it('enqueue method should add items to the queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.size).toEqual(3);
  });

  it('dequeue method should remove and return the first item from the queue', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);

    expect(queue.toArray()).toEqual([3]);
    expect(queue.size).toEqual(1);
  });

  it('dequeue method should return undefined when the queue is empty', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBeUndefined();
  });

  it('enqueue and dequeue methods should work fine in sequence', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);

    queue.dequeue();
    queue.dequeue();

    queue.enqueue(2);
    queue.enqueue(0);

    expect(queue.toArray()).toEqual([6, 2, 0]);
    expect(queue.size).toEqual(3);
  });

  it('peek method should return the first item without removing it', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toBe(1);

    expect(queue.size).toEqual(3);
    expect(queue.toArray()).toEqual([1, 2, 3]);
  });

  it('toArray method should return the queue as an array', () => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.toArray()).toEqual([1, 2, 3]);
  });
});