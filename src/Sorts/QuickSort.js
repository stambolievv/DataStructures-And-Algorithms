/**
 * @description Sorts an array of numbers using the QuickSort algorithm.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} The new sorted array in ascending order.
 * @timecomplexity O(n log(n)) - O(n^2) - The QuickSort algorithm has an average and best-case time complexity of O(n log n), where `n` is the number of elements in the array. In the worst-case scenario, where the array is already sorted in reverse or consists of identical elements, the time complexity can be O(n^2). However, with good pivot selection techniques and the recursive approach, the average time complexity is highly efficient at O(n log n).
 * @summary The function uses the recursive implementation of the QuickSort algorithm to sort the given array in ascending order.
 * It selects a pivot element from the array and partitions the array into two sub-arrays,
 * with elements smaller than the pivot on the left and elements greater than the pivot on the right.
 * The function then recursively sorts the sub-arrays and combines them to obtain the final sorted array.
 * Return the new sorted array.
 * @see {@link https://en.wikipedia.org/wiki/Quicksort QuickSort Algorithm} for further information.
 */
export default function quickSort(array) {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const greater = [];
  const lesser = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > pivot) greater.push(array[i]);
    else lesser.push(array[i]);
  }

  return [...quickSort(lesser), pivot, ...quickSort(greater)];
}