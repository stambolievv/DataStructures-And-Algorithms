/**
 * @description Performs a breadth-first search (BFS) on a binary tree to determine if a given element exists.
 * @param {BinaryNode<number>} root - The root node of the binary tree.
 * @param {number} target - The element to find in the binary tree.
 * @returns {boolean} `true` if the element is found, `false` otherwise.
 * @timecomplexity O(n) - The breadth-first search algorithm traverses each node in the binary tree once, resulting in a time complexity of linear, where `n` is the number of nodes in the tree.
 * @summary
 * The function performs a breadth-first search on the given binary tree to find the specified element.
 * It uses a queue data structure to store the nodes during traversal.
 * The algorithm starts by enqueueing the root node into the queue.
 * It continues the search until the queue becomes empty, indicating that all nodes have been visited.
 * At each iteration, it dequeues a node from the front of the queue and checks if its value is equal to the target.
 * If the value matches the target, the function returns `true` as the element is found.
 * If the value does not match, the algorithm enqueues the left and right child nodes (if they exist) into the queue.
 * This ensures that the traversal explores the tree in a breadth-first manner.
 * The process repeats until the queue is empty or the target element is found.
 * If the element is not found after the traversal, the function returns `false`.
 * @see {@link https://en.wikipedia.org/wiki/Breadth-first_search Breadth-First Search} for further information.
 */
export default function breadthFirstSearch(root, target) {
  const queue = [root]; // Use actual Queue

  while (queue.length > 0) {
    const current = queue.shift(); // Use Queue dequeue method

    if (!current) continue;

    if (current.value === target) return true;

    // use Queue enqueue method
    queue.push(current.left);
    queue.push(current.right);
  }

  return false;
}

/**
 * @typedef {object} BinaryNode<T> Represents a node in a binary tree.
 * @property {T} value - The value stored in the node.
 * @property {BinaryNode<T> | null} left - The left child node of the current node.
 * @property {BinaryNode<T> | null} right - The right child node of the current node.
 * @template T
 */