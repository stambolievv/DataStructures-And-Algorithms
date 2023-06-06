/**
 * @description Performs a pre-order traversal on a binary tree and returns the resulting path of values.
 * @param {BinaryNode<number>} head - The root node of the binary tree.
 * @returns {number[]} The resulting path of values in the pre-order traversal.
 * @timecomplexity O(n) - The pre-order traversal algorithm visits each node in the binary tree once, resulting in a time complexity of linear, where `n` is the number of nodes in the tree.
 * @summary
 * The function performs a pre-order traversal on the given binary tree to obtain the path of values.
 * It follows the pre-order traversal order, which visits the root node, then the left subtree, and finally the right subtree.
 * The traversal is done recursively by calling the internal `walk` function.
 * The `walk` function takes a node and a path as parameters and performs the actual traversal.
 * It appends the value of the current node to the path before recursively traversing the left and right subtrees.
 * The process repeats until all nodes have been visited.
 * The resulting path contains the values of the binary tree in the order specified by the pre-order traversal.
 * The path is initially empty and gets populated as the traversal progresses.
 * The function returns the resulting path once the traversal is complete.
 * @see {@link https://en.wikipedia.org/wiki/Tree_traversal#Pre-order_(NLR) Pre-Order Tree Traversal} for further information.
 */
export default function preOrderSearch(head) {
  const path = [];

  walk(head, path);

  return path;
}

/**
 * @description Recursive function to perform the pre-order traversal.
 * @param {BinaryNode<number> | null} node - The current node in the traversal.
 * @param {number[]} path - The path of values in the traversal.
 */
function walk(node, path) {
  if (!node) return;

  // pre
  path.push(node.value);  // Append the value of the current node to the path

  // in
  walk(node.left, path);  // Traverse the left subtree
  walk(node.right, path); // Traverse the right subtree

  // post
}

/**
 * @typedef {object} BinaryNode<T> Represents a node in a binary tree.
 * @property {T} value - The value stored in the node.
 * @property {BinaryNode<T> | null} left - The left child node of the current node.
 * @property {BinaryNode<T> | null} right - The right child node of the current node.
 * @template T
 */