/**
 * LRU (Least Recently Used) Cache data structure.
 *
 * LRU Cache is a type of cache that evicts the least recently used items when it reaches its capacity.
 * It provides constant-time complexity for both insertions and lookups.
 *
 * This is a class-based implementation of an LRU Cache. It provides the following functions:
 * - `set(key: PropertyKey, value: any): void` - Sets the value associated with a key in the cache.
 * - `update(key: PropertyKey, value: any): void` - Updates the value associated with a key in the cache.
 * - `get(key: PropertyKey): any | undefined` - Retrieves the value associated with a key from the cache.
 *
 * The time complexity for the LRU Cache operations is O(1).
 * The space complexity of the LRU Cache is determined by the capacity of the cache.
 *
 * @see {@link https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU) LRU} for further information.
 * @class
 */
export default class LRU {
  /**
   * @description The maximum number of items the cache can hold.
   * @type {number}
   */
  #capacity;
  /**
   * @description The head node of the doubly linked list representing the cache.
   * @type {Node|null}
   */
  #head;
  /**
   * @description The tail node of the doubly linked list representing the cache.
   * @type {Node|null}
   */
  #tail;
  /**
   * @description The current number of items in the cache.
   * @type {number}
   */
  #size;
  /**
   * @description A map to store key-node pairs for efficient lookup of nodes.
   * @type {Map<PropertyKey, Node>}
   */
  #lookup;
  /**
   * @description A weak map to store node-key pairs for reverse lookup of keys.
   * @type {WeakMap<Node, PropertyKey>}
   */
  #reverseLookup;

  /**
   * @description Creates an instance of LRU.
   * @param {number} [capacity=10] - The maximum number of items the cache can hold.
   * @constructor
   */
  constructor(capacity = 10) {
    this.#capacity = ~~capacity;
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
    this.#lookup = new Map();
    this.#reverseLookup = new WeakMap();
  }

  /**
   * @description Sets the value associated with a key in the cache.
   * If the key already exists in the cache, its value is updated and the item becomes the most recently used.
   * If the key does not exist in the cache, a new item is added to the cache.
   * If adding a new item exceeds the cache capacity, the least recently used item is removed.
   * @param {PropertyKey} key - The key of the item to be set or updated.
   * @param {any} value - The value to be associated with the key.
   */
  set(key, value) {
    if (this.#lookup.has(key)) {
      this.update(key, value);
      return;
    }

    const node = new Node(value);

    this.#size++;

    this.#prepend(node);
    this.#trimCache();

    this.#lookup.set(key, node);
    this.#reverseLookup.set(node, key);
  }

  /**
   * @description Updates the value associated with a key in the cache.
   * If the key already exists in the cache, its value is updated and the item becomes the most recently used.
   * If the key does not exist in the cache, a new item is added to the cache.
   * If adding a new item exceeds the cache capacity, the least recently used item is removed.
   * @param {PropertyKey} key - The key of the item to be updated.
   * @param {any} value - The new value to be associated with the key.
   */
  update(key, value) {
    if (!this.#lookup.has(key)) {
      this.set(key, value);
      return;
    }

    const node = this.#lookup.get(key);

    this.#detach(node);
    this.#prepend(node);

    node.value = value;
  }

  /**
   * @description Retrieves the value associated with a key from the cache.
   * @param {PropertyKey} key - The key of the item to retrieve.
   * @returns {any | undefined} The value associated with the key, or undefined if the key is not found.
   */
  get(key) {
    if (!this.#lookup.has(key)) return undefined;

    const node = this.#lookup.get(key);

    this.#detach(node);
    this.#prepend(node);

    return node.value;
  }

  /**
   * @description Detaches a node from the cache.
   * @param {Node} node - The node to detach.
   */
  #detach(node) {
    if (node.next) node.next.prev = node.prev;
    if (node.prev) node.prev.next = node.next;

    if (this.#head === node) this.#head = this.#head.next;
    if (this.#tail === node) this.#tail = this.#tail.prev;

    node.next = node.prev = undefined;
  }

  /**
   * @description Prepends a node to the cache.
   * @param {Node} node - The node to prepend.
   */
  #prepend(node) {
    if (this.#head) {
      node.next = this.#head;
      this.#head.prev = node;
    } else {
      this.#tail = node;
    }

    this.#head = node;
  }

  /**
   * @description Trims the cache to the specified capacity by evicting the least recently used items.
   */
  #trimCache() {
    if (this.#size <= this.#capacity) return;

    const tail = this.#tail;
    this.#detach(this.#tail);

    const key = this.#reverseLookup.get(tail);
    this.#lookup.delete(key);
    this.#reverseLookup.delete(tail);

    this.#size--;
  }
}

/**
 * @classdesc Represents a node in a LRU cache.
 * @class
 */
class Node {
  /**
   * @description Creates a new Node instance.
   * @param {any} value - The value to be stored in the node.
   * @constructor
   */
  constructor(value) {
    /**
     * @description The value stored in the node.
     * @type {any}
     */
    this.value = value;

    /**
     * @description Reference to the next node in the cache.
     * @type {Node|null}
     */
    this.next = null;

    /**
     * @description Reference to the previous node in the cache.
     * @type {Node|null}
     */
    this.prev = null;
  }
}