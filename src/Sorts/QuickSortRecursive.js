/**
 * @description Sorts an array of numbers using the recursive implementation of the QuickSort algorithm.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} The sorted array in ascending order.
 * @timecomplexity O(n log(n)) - O(n^2) - The QuickSort algorithm has an average and best-case time complexity of O(n log n), where `n` is the number of elements in the array. In the worst-case scenario, where the array is already sorted in reverse or consists of identical elements, the time complexity can be O(n^2). However, with good pivot selection techniques and the recursive approach, the average time complexity is highly efficient at O(n log n).
 * @summary The function uses the recursive implementation of the QuickSort algorithm to sort the given array in ascending order.
 * It selects a pivot element from the array and partitions the array into two sub-arrays,
 * with elements smaller than the pivot on the left and elements greater than the pivot on the right.
 * The function then recursively sorts the sub-arrays and combines them to obtain the final sorted array.
 * Modifies the original by sorting it array in place.
 * @see {@link https://en.wikipedia.org/wiki/Quicksort QuickSort Algorithm} for further information.
 */
export default function quickSortRecursive(array) {
  if (array.length <= 1) return array;

  recursion(array, 0, array.length - 1);

  return array;
}

/**
 * @description Recursively partitions and sorts the array within the given range using the QuickSort algorithm.
 * @param {number[]} array - The array to be sorted.
 * @param {number} low - The starting index of the range to be sorted.
 * @param {number} high - The ending index of the range to be sorted.
 */
function recursion(array, low, high) {
  if (low >= high) return;

  const pivotIndex = partition(array, low, high);

  recursion(array, low, pivotIndex - 1);
  recursion(array, pivotIndex + 1, high);
}

/**
 * @description Partitions the array and selects a pivot element for the QuickSort algorithm.
 * @param {number[]} array - The array to be partitioned.
 * @param {number} low - The starting index of the range to be partitioned.
 * @param {number} high - The ending index of the range to be partitioned.
 * @returns {number} The final index of the pivot element after partitioning.
 */
function partition(array, low, high) {
  // Assume a pivot
  const pivot = array[high];
  let index = low - 1;

  // Place every value lower than pivot, before the potential pivot position
  for (let i = low; i < high; ++i) {
    if (array[i] <= pivot) {
      index++;
      const temp = array[i];
      array[i] = array[index];
      array[index] = temp;
    }
  }

  // Increment to get the pivot position
  index++;

  array[high] = array[index];
  array[index] = pivot;

  return index;
}