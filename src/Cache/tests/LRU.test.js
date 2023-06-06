// @ts-nocheck
import { describe, it, expect } from 'vitest';
import LRU from '../LRU';

describe('LRU', () => {
  it('should set a value in the cache', () => {
    const cache = new LRU(3);

    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.set('key3', 'value3');

    expect(cache.get('key1')).toBe('value1');
  });

  it('should update a value in the cache', () => {
    const cache = new LRU(3);

    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.update('key1', 'newvalue1');

    expect(cache.get('key1')).toBe('newvalue1');
  });

  it('should return the value associated with a key', () => {
    const cache = new LRU(3);

    cache.set('key1', 'value1');

    expect(cache.get('key1')).toBe('value1');
  });

  it('should return undefined for a key not present in the cache', () => {
    const cache = new LRU(3);

    cache.set('key1', 'value1');

    expect(cache.get('key2')).toBeUndefined();
  });

  it('should evict the least recently used item when the capacity is exceeded', () => {
    const cache = new LRU(3);

    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.set('key3', 'value3');
    cache.set('key4', 'value4');

    expect(cache.get('key1')).toBeUndefined();
  });

  it('should update the position of an item when retrieved', () => {
    const cache = new LRU(3);

    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.set('key3', 'value3');
    cache.get('key1');
    cache.set('key4', 'value4');

    expect(cache.get('key1')).toBe('value1');
    expect(cache.get('key2')).toBeUndefined();
  });
});