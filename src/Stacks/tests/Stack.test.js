// @ts-nocheck
import { describe, it, expect } from 'vitest';
import Stack from '../Stack';

describe('Stack', () => {
  it('push method should add items to the stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size).toEqual(3);
  });

  it('pop method should remove and return the top item from the stack', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);

    expect(stack.toArray()).toEqual([1]);
    expect(stack.size).toEqual(1);
  });

  it('pop method should return undefined when stack is empty', () => {
    const stack = new Stack();
    expect(stack.pop()).toBeUndefined();
  });

  it('push and pop methods should work fine in a sequence one after the other', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    stack.pop();
    stack.pop();

    stack.push(4);
    stack.push(5);
    stack.push(6);

    stack.pop();
    stack.pop();

    stack.push(2);
    stack.push(0);

    expect(stack.toArray()).toEqual([0, 2, 4]);
    expect(stack.size).toEqual(3);
  });

  it('peek method should return the top item without removing it', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);

    expect(stack.size).toEqual(3);
    expect(stack.toArray()).toEqual([3, 2, 1]);
  });

  it('toArray method should return the stack as an array', () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.toArray()).toEqual([3, 2, 1]);
  });
});