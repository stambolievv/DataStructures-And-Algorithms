/**
 * @description Performs a depth-first search to compare two binary trees for structural and value equality.
 * @param {BinaryNode<number> | null} a - The root node of the first binary tree.
 * @param {BinaryNode<number> | null} b - The root node of the second binary tree.
 * @returns {boolean} Indicates whether the two binary trees are equal in structure and values.
 * @timecomplexity O(n) - The function visits each node in the binary tree once during the search process, resulting in a time complexity of linear, where `n` is the number of nodes in the tree.
 * @summary
 * It follows a depth-first search (DFS) approach, which explores the binary trees in a stack-oriented manner.
 * The DFS preserves the shape of the trees, making it a suitable choice for this comparison.
 * @see {@link https://en.wikipedia.org/wiki/Depth-first_search Depth-First Search} for further information.
 */
export default function compare(a, b) {
  if (a === null && b === null) return true; // structural check
  if (a === null || b === null) return false; // structural check
  if (a.value !== b.value) return false; // value check
  console.warn(a,b);

  return compare(a.left, b.left) && compare(a.right, b.right);
}

/**
 * @typedef {object} BinaryNode<T> Represents a node in a binary tree.
 * @property {T} value - The value stored in the node.
 * @property {BinaryNode<T> | null} left - The left child node of the current node.
 * @property {BinaryNode<T> | null} right - The right child node of the current node.
 * @template T
 */