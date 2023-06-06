/**
 * @description Performs a post-order traversal on a binary tree and returns the resulting path of values.
 * @param {BinaryNode<number>} head - The root node of the binary tree.
 * @returns {number[]} The resulting path of values in the post-order traversal.
 * @timecomplexity O(n) - The post-order traversal algorithm visits each node in the binary tree once, resulting in a time complexity of linear, where `n` is the number of nodes in the tree.
 * @summary
 * The function performs a post-order traversal on the given binary tree to obtain the path of values.
 * It follows the post-order traversal order, which visits the left subtree, then the right subtree, and finally the root node.
 * The traversal is done recursively by calling the internal `walk` function.
 * The `walk` function takes a node and a path as parameters and performs the actual traversal.
 * It recursively traverses the left and right subtrees before appending the value of the current node to the path.
 * The process repeats until all nodes have been visited.
 * The resulting path contains the values of the binary tree in the order specified by the post-order traversal.
 * The path is initially empty and gets populated as the traversal progresses.
 * The function returns the resulting path once the traversal is complete.
 * @see {@link https://en.wikipedia.org/wiki/Tree_traversal#Post-order_(LRN) Post-Order Tree Traversal} for further information.
 */
export default function postOrderSearch(head) {
  const path = [];

  walk(head, path);

  return path;
}

/**
 * @description Recursive function to perform the post-order traversal.
 * @param {BinaryNode<number> | null} node - The current node in the traversal.
 * @param {number[]} path - The path of values in the traversal.
 */
function walk(node, path) {
  if (!node) return;

  // pre

  // in
  walk(node.left, path);  // Traverse the left subtree
  walk(node.right, path); // Traverse the right subtree

  // post
  path.push(node.value);  // Append the value of the current node to the path
}

/**
 * @typedef {object} BinaryNode<T> Represents a node in a binary tree.
 * @property {T} value - The value stored in the node.
 * @property {BinaryNode<T> | null} left - The left child node of the current node.
 * @property {BinaryNode<T> | null} right - The right child node of the current node.
 * @template T
 */