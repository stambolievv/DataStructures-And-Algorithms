/**
 * @description Performs the merge sort algorithm to sort an array of numbers in ascending order.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} The sorted array in ascending order.
 * @timecomplexity O(n log n) - The function divides the array into smaller subarrays recursively and then merges them back together. The merge process takes O(n) time, and the recursion depth is O(log n), resulting in a time complexity of O(n log n).
 * @summary The function implements the merge sort algorithm, which is a divide-and-conquer algorithm.
 * It recursively divides the array into smaller subarrays until each subarray contains a single element.
 * Then, it merges the subarrays back together in a sorted order,
 * creating larger and larger sorted subarrays until the entire array is sorted in ascending order.
 * Return the new sorted array.
 * @see {@link https://en.wikipedia.org/wiki/Merge_sort Merge Sort Algorithm} for further information.
 */
export default function mergeSort(array) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

/**
 * @description Merges two sorted arrays into a single sorted array.
 * @param {number[]} left - The left sorted array.
 * @param {number[]} right - The right sorted array.
 * @returns {number[]} - The merged sorted array.
 */
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}