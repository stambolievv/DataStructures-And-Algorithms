/**
 * @description Performs the bubble sort algorithm to sort an array of numbers in ascending order. This is an in-place sorting algorithm, meaning it modifies the original array without using additional memory.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} The sorted array in ascending order.
 * @timecomplexity O(n^2) - The function iterates through the array multiple times, comparing adjacent elements and swapping them if necessary. In the worst case, where the array is in reverse order, the algorithm requires n*(n-1)/2 comparisons and swaps, resulting in a quadratic time complexity of O(n^2).
 * @summary
 * The function implements the bubble sort algorithm, which repeatedly steps through the array,
 * compares adjacent elements, and swaps them if they are in the wrong order.
 * This process is repeated for each element in the array until the entire array is sorted in ascending order.
 * Modifies the original by sorting it array in place.
 * @see {@link https://en.wikipedia.org/wiki/Bubble_sort Bubble Sort Algorithm} for further information.
 */
export default function bubbleSort(array) {
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}