// @ts-nocheck
import { describe, it, expect } from 'vitest';
import SinglyLinkedList from '../SinglyLinkedList';

describe('SinglyLinkedList', () => {
  it('should initialize an empty list', () => {
    const list = new SinglyLinkedList();

    expect(list.length).toBe(0);
    expect(list.get(0)).toBeUndefined();
  });

  it('should append items to the end of the list', () => {
    const list = new SinglyLinkedList();

    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.length).toBe(3);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);
  });

  it('should prepend items to the beginning of the list', () => {
    const list = new SinglyLinkedList();

    list.prepend(3);
    list.prepend(2);
    list.prepend(1);

    expect(list.length).toBe(3);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);
  });

  it('should insert items at a specified index', () => {
    const list = new SinglyLinkedList();

    list.append(1);
    list.append(3);
    list.insertAt(2, 1);

    expect(list.length).toBe(3);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);
  });

  it('should throw an error when inserting at an out-of-bounds index', () => {
    const list = new SinglyLinkedList();

    expect(() => list.insertAt(1, -1)).toThrow(RangeError);
    expect(() => list.insertAt(1, 1)).toThrow(RangeError);
    expect(() => list.insertAt(1, 2)).toThrow(RangeError);
  });

  it('should remove the first occurrence of an item', () => {
    const list = new SinglyLinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(2);

    expect(list.remove(2)).toBe(2);
    expect(list.length).toBe(3);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(3);
    expect(list.get(2)).toBe(2);
  });

  it('should remove the item at a specified index', () => {
    const list = new SinglyLinkedList();

    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.removeAt(1)).toBe(2);
    expect(list.length).toBe(2);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(3);
  });

  it('should return the index of the first occurrence of an item', () => {
    const list = new SinglyLinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(2);

    expect(list.indexOf(2)).toBe(1);
    expect(list.indexOf(4)).toBe(-1);
  });

  it('should return the index of the last occurrence of an item', () => {
    const list = new SinglyLinkedList();

    list.append(1);
    list.append(2);
    list.append(3);
    list.append(2);

    expect(list.lastIndexOf(2)).toBe(3);
    expect(list.lastIndexOf(4)).toBe(-1);
  });

  it('should return an iterator for iterating over the items in the list', () => {
    const list = new SinglyLinkedList();

    list.append(1);
    list.append(2);
    list.append(3);

    const iterator = list.iterator();

    expect(iterator.next().value).toBe(1);
    expect(iterator.next().value).toBe(2);
    expect(iterator.next().value).toBe(3);
    expect(iterator.next().done).toBe(true);
  });

  it('should handle edge cases when removing items', () => {
    const list = new SinglyLinkedList();

    list.append(1);
    expect(list.remove(2)).toBeUndefined();
    expect(list.removeAt(1)).toBeUndefined();
    expect(list.removeAt(-1)).toBeUndefined();
    expect(list.removeAt(0)).toBe(1);
    expect(list.length).toBe(0);
  });

  it('should handle edge cases when getting items', () => {
    const list = new SinglyLinkedList();

    list.append(1);
    expect(list.get(-1)).toBeUndefined();
    expect(list.get(1)).toBeUndefined();
    expect(list.get(0)).toBe(1);
  });
});