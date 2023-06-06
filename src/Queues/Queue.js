/**
 * Queue data structure.
 *
 * A Queue is a data structure that follows the First-In-First-Out (FIFO) system,
 * meaning that the elements added to the queue are placed at the end and removed from the front.
 * In other words the first element to enter the queue is the first to be removed.
 *
 * This is a class-based implementation of a Queue. It provides functions:
 * - `enqueue(item: any): number` - Add an item to the end of the queue.
 * - `dequeue(): any | undefined` - Remove an item at the front of the queue.
 * - `peek(): any | undefined` - Retrieve the value at the front of the queue without removing it,
 * - `toArray(): any[]` - Convert the queue into an array.
 *
 * All operations in this implementation have a time complexity of O(1),
 * except 'toArray' which has a time complexity of O(n), where n is the size of the queue.
 *
 * @see {@link https://en.wikipedia.org/wiki/Queue_(abstract_data_type) Queue Data Structure} for further information.
 * @class
 */
export default class Queue {
  /**
   * @description The head node of the queue.
   * @type {Node|null}
   */
  #head;
  /**
   * @description The tail node of the queue.
   * @type {Node|null}
   */
  #tail;
  /**
   * @description The size of the queue.
   * @type {number}
   */
  #size;

  /**
   * @description Initializes a new instance of the Queue class.
   * @constructor
   */
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  /**
   * @description Returns the number of items in the queue.
   * @type {number}
   * @readonly
   */
  get size() {
    return this.#size;
  }

  /**
   * @description Adds an item to the end of the queue.
   * @param {any} item - The item to be added to the queue.
   * @returns {number} The new size of the queue.
   */
  enqueue(item) {
    const node = { value: item, next: null };

    if (!this.#head) this.#head = node;
    else this.#tail.next = node;

    this.#tail = node;

    return ++this.#size;
  }

  /**
   * @description - Removes and returns the item at the front of the queue.
   * @returns {any | undefined} The item that was removed, or undefined if the queue is empty.
   */
  dequeue() {
    if (!this.#head) return undefined;

    const head = this.#head;
    this.#head = this.#head.next;

    if (!this.#head) this.#tail = null;

    this.#size--;

    return head.value;
  }

  /**
   * @description Retrieves the item at the top of the queue without removing it.
   * @returns {any | undefined} - The item at the top of the queue.
   */
  peek() {
    return this.#head?.value;
  }

  /**
   * @description Converts the queue to an array representation.
   * @returns {any[]} An array containing the items of the queue in front-to-back order.
   */
  toArray() {
    const array = [];
    let current = this.#head;

    while (current) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }
}

/**
 * @classdesc Represents a node in a queue.
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
     * @description Reference to the next node in the queue.
     * @type {Node|null}
     */
    this.next = null;
  }
}