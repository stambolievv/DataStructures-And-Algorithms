/**
 * @description Performs a depth-first search (DFS) on a binary tree to determine if a given element exists.
 * @param {BinaryNode<number>} root - The root node of the binary tree.
 * @param {number} target - The element to find in the binary tree.
 * @returns {boolean} `true` if the element is found, `false` otherwise.
 * @timecomplexity O(n) - The depth-first search algorithm traverses each node in the binary tree once, resulting in a time complexity of linear, where `n` is the number of nodes in the tree.
 * @summary
 * The function performs a depth-first search on the given binary tree to find the specified element.
 * It uses a stack data structure to store the nodes during traversal.
 * The algorithm starts by pushing the root node into the stack.
 * It continues the search until the stack becomes empty, indicating that all nodes have been visited.
 * At each iteration, it pops a node from the top of the stack and checks if its value is equal to the target.
 * If the value matches the target, the function returns `true` as the element is found.
 * If the value does not match, the algorithm pushes the left and right child nodes (if they exist) into the stack.
 * This ensures that the traversal explores the tree in a depth-first manner.
 * The process repeats until the stack is empty or the target element is found.
 * If the element is not found after the traversal, the function returns `false`.
 * @see {@link https://en.wikipedia.org/wiki/Depth-first_search Depth-First Search} for further information.
 */
export default function depthFirstSearch(root, target) {
  const stack = [root]; // Use actual Stack

  while (stack.length) {
    const current = stack.pop(); // Use Stack pop method

    if (!current) continue;

    if (current.value === target) return true;

    // Use Stack push method
    stack.push(current.left);
    stack.push(current.right);
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