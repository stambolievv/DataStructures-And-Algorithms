/**
 * MaxHeap data structure.
 *
 * A MaxHeap is a binary heap data structure where the parent nodes have a lower value than their children.
 * It provides constant-time complexity for insertion and deletion of the maximum element.
 *
 * This is a class-based implementation of a MaxHeap. It provides the following functions:
 *
 * - `insert(value: number): void` - Inserts a value into the heap.
 * - `delete(): number` - Deletes the maximum element from the heap and returns it.
 *
 * The time complexity for the MaxHeap operations is O(log n).
 *
 * The space complexity of the MaxHeap is determined by the number of elements in the heap.
 *
 * @see {@link https://en.wikipedia.org/wiki/Heap_(data_structure) Heap} for further information.
 * @class
 */
export default class MaxHeap {
  /**
   * @description The underlying data structure used to store the elements of the heap.
   * @type {number[]}
   */
  #heap;

  /**
   * @description Initializes a new instance of the MaxHeap class.
   * @constructor
   */
  constructor() {
    this.#heap = [];
  }

  /**
   * @description Returns the number of items in the heap.
   * @type {number}
   * @readonly
   */
  get size() {
    return this.#heap.length;
  }

  /**
   * @description Inserts a value into the heap.
   * @param {number} value - The value to be inserted.
   */
  insert(value) {
    this.#heap.push(value);
    this.#heapifyUp(this.#heap.length - 1);
  }

  /**
   * @description Deletes the maximum element from the heap and returns it.
   * @returns {number} The maximum element from the heap.
   */
  delete() {
    if (this.#heap.length === 0) return -1;

    const deletedValue = this.#heap[0];
    const lastValue = this.#heap.pop();

    if (this.#heap.length > 0) {
      this.#heap[0] = lastValue;
      this.#heapifyDown(0);
    }

    return deletedValue;
  }

  /**
   * @description Performs the heapify up operation on the heap starting from the given index.
   * @param {number} index - The index of the element to heapify up.
   */
  #heapifyUp(index) {
    while (index > 0) {
      const parentIndex = this.#parentIndex(index);

      if (this.#heap[parentIndex] >= this.#heap[index]) break;

      this.#swap(parentIndex, index);
      index = parentIndex;
    }
  }

  /**
   * @description Performs the heapify down operation on the heap starting from the given index.
   * @param {number} index - The index of the element to heapify down.
   */
  #heapifyDown(index) {
    if (index < 0 || index >= this.#heap.length) return;

    let largest = index;
    const leftIndex = this.#leftChildIndex(index);
    const rightIndex = this.#rightChildIndex(index);

    if (leftIndex < this.#heap.length && this.#heap[leftIndex] > this.#heap[largest]) largest = leftIndex;
    if (rightIndex < this.#heap.length && this.#heap[rightIndex] > this.#heap[largest]) largest = rightIndex;

    if (largest !== index) {
      this.#swap(index, largest);
      this.#heapifyDown(largest);
    }
  }

  /**
   * @description Returns the index of the parent node for the given index.
   * @param {number} index - The index of the node.
   * @returns {number} The index of the parent node.
   */
  #parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * @description Returns the index of the left child node for the given index.
   * @param {number} index - The index of the node.
   * @returns {number} The index of the left child node.
   */
  #leftChildIndex(index) {
    return (2 * index) + 1;
  }

  /**
   * @description Returns the index of the right child node for the given index.
   * @param {number} index - The index of the node.
   * @returns {number} The index of the right child node.
   */
  #rightChildIndex(index) {
    return (2 * index) + 2;
  }

  /**
   * @description Swaps the elements at the given indices in the heap.
   * @param {number} a - The first index.
   * @param {number} b - The second index.
   */
  #swap(a, b) {
    [this.#heap[a], this.#heap[b]] = [this.#heap[b], this.#heap[a]];
  }
}