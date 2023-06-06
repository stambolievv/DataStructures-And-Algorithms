/**
 * Doubly Linked List data structure.
 *
 * A Doubly Linked List is a linear data structure that consists of a sequence of nodes, each containing a value and references to the previous and next nodes.
 * It allows for efficient insertion and deletion operations at both ends of the list.
 *
 * This is a class-based implementation of a Doubly Linked List. It provides the following functions:
 * - `append(item: any): number` - Inserts an item at the end of the list.
 * - `prepend(item: any): number` - Inserts an item at the beginning of the list.
 * - `insertAt(item: any, index: number): number` - Inserts an item at a specified index in the list.
 * - `get(index: number): any | undefined` - Retrieves the item at a specified index in the list.
 * - `remove(item: any): any | undefined` - Removes the first occurrence of an item from the list.
 * - `removeAt(index: number): any | undefined` - Removes the item at a specified index from the list.
 * - `indexOf(item: any): index` - Returns the index of the first occurrence of an item in the list.
 * - `lastIndexOf(item: any): index` - Returns the index of the last occurrence of an item in the list.
 * - `iterator(): IterableIterator<any>` - Returns an iterator for iterating over the items in the list.
 *
 * The time complexities for the Doubly Linked List operations are as follows:
 * - `append` - O(1) - Constant time regardless of the size of the list.
 * - `prepend` - O(1) - Constant time regardless of the size of the list.
 * - `insertAt` - O(n) - Where n is determined by the number of elements stored in the list.
 * - `get` - O(n) - Where n is determined by the number of elements stored in the list.
 * - `remove` - O(n) - Where n is determined by the number of elements stored in the list.
 * - `removeAt` - O(1) - Constant time regardless of the size of the list.
 * - `indexOf` - O(n) - Where n is determined by the number of elements stored in the list.
 * - `lastIndexOf` - O(n) - Where n is determined by the number of elements stored in the list.
 *
 * The space complexity of the Doubly Linked List is determined by the number of elements stored in it.
 *
 * @see {@link https://en.wikipedia.org/wiki/Doubly_linked_list Doubly Linked List} for further information.
 * @class
 */
export default class DoublyLinkedList {
  /**
   * @description The head node of the doubly LinkedList.
   * @type {Node|null}
   */
  #head;
  /**
   * @description The tail node of the doubly LinkedList.
   * @type {Node|null}
   */
  #tail;
  /**
   * @description The size of the doubly LinkedList.
   * @type {number}
   */
  #size;

  /**
   * @description Initializes a new instance of the the doubly LinkedList class.
   * @constructor
   */
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  /**
   * @description Returns the number of items in the list.
   * @type {number}
   * @readonly
   */
  get length() {
    return this.#size;
  }

  /**
   * @description Inserts an item at the end of the list.
   * @param {any} item - The item to be inserted.
   * @returns {number} The new length of the list.
   */
  append(item) {
    const node = new Node(item);

    if (this.#tail) {
      node.prev = this.#tail;
      this.#tail.next = node;
    } else {
      this.#head = node;
    }

    this.#tail = node;

    return ++this.#size;
  }

  /**
   * @description Inserts an item at the beginning of the list.
   * @param {any} item - The item to be inserted.
   * @returns {number} The new length of the list.
   */
  prepend(item) {
    const node = new Node(item);

    if (this.#head) {
      node.next = this.#head;
      this.#head.prev = node;
    } else {
      this.#tail = node;
    }

    this.#head = node;

    return ++this.#size;
  }

  /**
   * @description Inserts an item at a specified index in the list.
   * @param {any} item - The item to be inserted.
   * @param {number} index - The index at which the item should be inserted.
   * @returns {number} The new length of the list.
   * @throws {RangeError} If the index is out of bounds.
   */
  insertAt(item, index) {
    if (index < 0 || index > this.#size) throw new RangeError(`Index out of bounds! The index "${index}" is not within the range of valid indices for the list`);
    else if (index === 0) return this.prepend(item);
    else if (index === this.#size) return this.append(item);

    const node = new Node(item);
    const current = this.#getNode(index);

    node.next = current;
    node.prev = current.prev;

    current.prev.next = node;
    current.prev = node;

    return ++this.#size;
  }

  /**
   * @description Retrieves the item at a specified index in the list.
   * @param {number} index - The index of the item to retrieve.
   * @returns {any | undefined} The item at the specified index, or undefined if the index is out of bounds.
   */
  get(index) {
    if (index < 0 || index >= this.#size) return undefined;
    return this.#getNode(index).value;
  }

  /**
   * @description Removes the first occurrence of an item from the list.
   * @param {any} item - The item to be removed.
   * @returns {any | undefined} The removed item, or undefined if the item is not found.
   */
  remove(item) {
    return this.removeAt(this.indexOf(item));
  }

  /**
   * @description Removes the item at a specified index from the list.
   * @param {number} index - The index of the item to remove.
   * @returns {any | undefined} The removed item, or undefined if the index is out of bounds.
   */
  removeAt(index) {
    if (index < 0 || index >= this.#size) return undefined;
    return this.#removeNode(this.#getNode(index));
  }

  /**
   * @description Returns the index of the first occurrence of an item in the list.
   * @param {any} item - The item to search for.
   * @returns {number} The index of the first occurrence of the item, or -1 if the item is not found.
   */
  indexOf(item) {
    let current = this.#head;
    let index = 0;

    while (current) {
      if (item === current.value) return index;

      current = current.next;
      index++;
    }

    return -1;
  }

  /**
   * @description Returns the index of the last occurrence of an item in the list.
   * @param {any} item - The item to search for.
   * @returns {number} The index of the last occurrence of the item, or -1 if the item is not found.
   */
  lastIndexOf(item) {
    let current = this.#tail;
    let index = this.#size - 1;

    while (current) {
      if (item === current.value) return index;

      current = current.prev;
      index--;
    }

    return -1;
  }

  /**
   * @description Returns an iterator for iterating over the items in the list.
   * @returns {IterableIterator<any>} An iterator that yields the items in the list in sequential order.
   */
  iterator() {
    let currentNode = this.#head;

    const iterate = function* () {
      while (currentNode) {
        yield currentNode.value;
        currentNode = currentNode.next;
      }
    };

    return iterate();
  }

  /**
   * @description Retrieves the node at a specified index in the list.
   * @param {number} index - The index of the node to retrieve.
   * @returns {Node} The node at the specified index.
   */
  #getNode(index) {
    let current = this.#head;

    for (let i = 0; current && i < index; i++) {
      current = current.next;
    }

    return current;
  }

  /**
   * @description Removes a specified node from the list.
   * @param {Node} node - The node to be removed.
   * @returns {any | undefined} The value of the removed node, or undefined if the node is not found.
   */
  #removeNode(node) {
    this.#size--;

    if (this.#size === 0) {
      const out = this.#head?.value;
      this.#head = this.#tail = null;
      return out;
    }

    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;

    if (node === this.#head) this.#head = node.next;
    if (node === this.#tail) this.#tail = node.prev;

    node.prev = node.next = null;

    return node.value;
  }
}

/**
 * @classdesc Represents a node in a doubly linked list.
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
     * @description Reference to the next node in the linked list.
     * @type {Node|null}
     */
    this.next = null;

    /**
     * @description Reference to the previous node in the linked list.
     * @type {Node|null}
     */
    this.prev = null;
  }
}