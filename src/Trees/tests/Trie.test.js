// @ts-nocheck
import { describe, it, expect } from 'vitest';
import Trie from '../Trie';

describe('Trie', () => {
  it('should insert a word into the trie', () => {
    const trie = new Trie();

    trie.insert('apple');
    trie.insert('banana');
    trie.insert('orange');

    expect(trie.contains('apple')).toBe(true);
    expect(trie.contains('banana')).toBe(true);
    expect(trie.contains('orange')).toBe(true);
    expect(trie.contains('grape')).toBe(false);
  });

  it('should remove a word from the trie', () => {
    const trie = new Trie();

    trie.insert('apple');
    trie.insert('banana');
    trie.insert('orange');

    trie.remove('banana');
    trie.remove('grape');

    expect(trie.contains('apple')).toBe(true);
    expect(trie.contains('banana')).toBe(false);
    expect(trie.contains('orange')).toBe(true);
    expect(trie.contains('grape')).toBe(false);
  });

  it('should check if a word is present in the trie', () => {
    const trie = new Trie();

    trie.insert('apple');
    trie.insert('banana');
    trie.insert('orange');

    expect(trie.contains('apple')).toBe(true);
    expect(trie.contains('banana')).toBe(true);
    expect(trie.contains('orange')).toBe(true);
    expect(trie.contains('grape')).toBe(false);
  });

  it('should retrieve all words that start with a given prefix', () => {
    const trie = new Trie();

    trie.insert('apple');
    trie.insert('banana');
    trie.insert('orange');
    trie.insert('ant');
    trie.insert('antenna');

    const words = trie.startsWith('an');
    expect(words).toEqual(['ant', 'antenna']);
  });

  it('should retrieve all words that end with a given suffix', () => {
    const trie = new Trie();

    trie.insert('apple');
    trie.insert('banana');
    trie.insert('orange');
    trie.insert('grape');
    trie.insert('shape');

    const words = trie.endsWith('ape');
    expect(words).toEqual(['grape', 'shape']);
  });
});
