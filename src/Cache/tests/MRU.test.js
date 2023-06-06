// @ts-nocheck
import { describe, it, expect } from 'vitest';
import MRU from '../MRU';

describe('MRU Cache', () => {
  it('should set and get values', () => {
    const cache = new MRU(3);

    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.set('key3', 'value3');

    expect(cache.get('key1')).toEqual('value1');
    expect(cache.get('key2')).toEqual('value2');
    expect(cache.get('key3')).toEqual('value3');
  });

  it('should update existing values', () => {
    const cache = new MRU(3);

    cache.set('key1', 'value1');
    cache.set('key2', 'value2');

    cache.update('key1', 'updatedValue1');
    cache.update('key2', 'updatedValue2');

    expect(cache.get('key1')).toEqual('updatedValue1');
    expect(cache.get('key2')).toEqual('updatedValue2');
  });

  it('should evict the most recently used item when capacity is reached', () => {
    const cache = new MRU(3);

    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.set('key3', 'value3');
    cache.set('key4', 'value4');

    expect(cache.get('key1')).toBeUndefined();
    expect(cache.get('key2')).toEqual('value2');
    expect(cache.get('key3')).toEqual('value3');
    expect(cache.get('key4')).toEqual('value4');
  });

  it('should return undefined for non-existent keys', () => {
    const cache = new MRU(3);

    cache.set('key1', 'value1');

    expect(cache.get('key2')).toBeUndefined();
    expect(cache.get('key3')).toBeUndefined();
  });

  it('should update the value and move the item to the most recently used position', () => {
    const cache = new MRU(3);

    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.set('key3', 'value3');

    cache.get('key1');
    cache.get('key2');
    cache.get('key3');

    cache.update('key2', 'updatedValue2');

    expect(cache.get('key1')).toEqual('value1');
    expect(cache.get('key2')).toEqual('updatedValue2');
    expect(cache.get('key3')).toEqual('value3');
  });
});
