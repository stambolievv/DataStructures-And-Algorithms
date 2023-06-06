/**
 * Stack data structure.
 *
 * A Stack is a data structure that follows the Last-In-First-Out (LIFO) system,
 * meaning that elements added to the stack are placed on the top and only the
 * last element (from the top) can be accessed or removed.
 *
 * This is a class-based implementation of a Stack. It provides functions
 * - `push(item: any): number` - Add an item to the top of the stack.
 * - `pop(): any | undefined` - Remove an item from the top of the stack.
 * - `peek(): any | undefined` - Retrieve the item at the top of the stack without removing it.
 * - `toArray(): any[]` - Convert the stack into an array.
 *
 * All operations in this implementation have a time complexity of O(1),
 * except 'toArray' which has a time complexity of O(n), where n is the size of the stack.
 *
 * @see {@link https://en.wikipedia.org/wiki/Stack_(abstract_data_type) Stack Data Structure} for further information.
 * @class
 */
export default class Stack {
  /**
   * @description The head node of the stack.
   * @type {Node|null}
   */
  #head;
  /**
   * @description The size of the stack.
   * @type {number}
   */
  #size;

  /**
   * @description Initializes a new instance of the Stack class.
   * @constructor
   */
  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  /**
   * @description Returns the number of items in the stack.
   * @type {number}
   * @readonly
   */
  get size() {
    return this.#size;
  }

  /**
   * @description Adds an item to the top of the stack.
   * @param {any} item - The item to be added to the stack.
   * @returns {number} The new size of the stack.
   */
  push(item) {
    const node = { value: item, prev: this.#head };

    this.#head = node;

    return ++this.#size;
  }

  /**
   * @description Removes and returns the item from the top of the stack.
   * @returns {any | undefined} - The item that was removed, or undefined if the stack is empty.
   */
  pop() {
    if (this.#size === 0) return undefined;

    this.#size--;

    const head = this.#head;
    this.#head = head.prev;

    return head.value;
  }

  /**
   * @description Retrieves the item at the top of the stack without removing it.
   * @returns {any | undefined} - The item at the top of the stack.
   */
  peek() {
    return this.#head?.value;
  }

  /**
   * @description Converts the stack to an array representation.
   * @returns {any[]} An array containing the items of the stack in top-to-bottom order.
   */
  toArray() {
    const array = [];
    let current = this.#head;

    while (current) {
      array.push(current.value);
      current = current.prev;
    }

    return array;
  }
}

/**
 * @classdesc Represents a node in a stack.
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
     * @description Reference to the previous node in the stack.
     * @type {Node|null}
     */
    this.prev = null;
  }
}