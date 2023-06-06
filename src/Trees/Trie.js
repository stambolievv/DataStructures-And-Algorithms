/**
 * Trie data structure.
 *
 * A Trie is a tree-like data structure used for efficient retrieval of keys and is often used for autocomplete functionality.
 * It stores keys (usually strings) in a tree structure, where each node represents a character.
 * The Trie allows for fast insertion, deletion, and search operations.
 *
 * This is a class-based implementation of a Trie. It provides the following functions:
 * - `insert(word: string): void` - Inserts a word into the Trie.
 * - `remove(word: string): void` - Removes a word from the Trie.
 * - `contains(word: string): boolean` - Checks if a word is present in the Trie.
 * - `startsWith(prefix: string): string[]` - Retrieves all words in the Trie that start with a given prefix.
 * - `endsWith(suffix: string): string[]` - Retrieves all words in the Trie that end with a given suffix.
 *
 * The time complexity for the Trie operations are as follows:
 * - `insert` - O(m), where m is the length of the word being inserted.
 * - `remove` - O(m), where m is the length of the word being removed.
 * - `contains` - O(m), where m is the length of the word being searched.
 * - `startsWith` - O(h + k) - Where h is the height of the trie and k is the number of words that match the given prefix.
 * - `endsWith` - O(h + k) - Where h is the height of the trie and k is the number of words that match the given suffix.
 * The space complexity of the Trie is determined by the number of words stored in it and the average length of the words.
 *
 * @see {@link https://en.wikipedia.org/wiki/Trie Trie} for further information.
 * @class
 */
export default class Trie {
  /**
   * @description The root node of the Trie.
   * @type {TrieNode}
   */
  #root;

  /**
   * @description Initializes a new instance of the Trie class.
   * @constructor
   */
  constructor() {
    this.#root = new TrieNode();
  }

  /**
   * @description Inserts a word into the trie.
   * @param {string} word - The word to be inserted.
   */
  insert(word) {
    let currentNode = this.#root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children.has(char)) currentNode.children.set(char, new TrieNode(currentNode));
      currentNode = currentNode.children.get(char);
    }

    currentNode.isEndOfWord = true;
  }

  /**
   * @description Removes a word from the trie.
   * @param {string} word - The word to be removed.
   */
  remove(word) {
    let currentNode = this.#root;
    const nodesToBeDeleted = [];

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children.has(char)) return;

      currentNode = currentNode.children.get(char);
      nodesToBeDeleted.push({ char, node: currentNode });
    }

    if (!currentNode.isEndOfWord) return;
    currentNode.isEndOfWord = false;

    while (nodesToBeDeleted.length > 0) {
      const { char, node } = nodesToBeDeleted.pop();

      if (node.isEndOfWord || node.children.size > 0) break;

      node.parent.children.delete(char);
    }
  }

  /**
   * @description Checks if a word is present in the trie.
   * @param {string} word - The word to check.
   * @returns {boolean} - Indicates whether the word is present in the trie.
   */
  contains(word) {
    let currentNode = this.#root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children.has(char)) return false;
      currentNode = currentNode.children.get(char);
    }

    return currentNode.isEndOfWord;
  }

  /**
   * @description Retrieves all words in the trie that start with the given prefix.
   * @param {string} prefix - The prefix to match.
   * @returns {string[]} - An array of words that start with the prefix.
   */
  startsWith(prefix) {
    return this.#collectWords(word => word.startsWith(prefix));
  }

  /**
   * @description Retrieves all words in the trie that end with the given suffix.
   * @param {string} suffix - The suffix to match.
   * @returns {string[]} - An array of words that end with the suffix.
   */
  endsWith(suffix) {
    return this.#collectWords(word => word.endsWith(suffix));
  }

  /**
   * @description Helper method to collect words based on a matching function.
   * @param {Function} matchFn - The matching function that takes a word and returns a boolean indicating if it matches.
   * @param {TrieNode} [node] - The current node in the traversal.
   * @param {string} [word] - The current word formed during the traversal.
   * @returns {string[]} - An array of words that match the given matching function.
   */
  #collectWords(matchFn, node = this.#root, word = '') {
    const words = [];

    if (node.isEndOfWord && matchFn(word)) words.push(word);

    for (const [char, childNode] of node.children) {
      words.push(...this.#collectWords(matchFn, childNode, word + char));
    }

    return words;
  }
}

/**
 * @classdesc Represents a node in the Trie data structure.
 * @class
 */
class TrieNode {
  /**
   * @description Creates an instance of TrieNode.
   * @param {TrieNode} [parent=null] - The parent node of the TrieNode.
   * @constructor
   */
  constructor(parent = null) {
    /**
     * @description The parent node of the TrieNode.
     * @type {TrieNode}
     */
    this.parent = parent;

    /**
     * @description The children nodes of the TrieNode.
     * @type {Map<any, TrieNode>}
     */
    this.children = new Map();

    /**
     * @description Indicates whether the TrieNode represents the end of a word.
     * @type {boolean}
     */
    this.isEndOfWord = false;
  }
}