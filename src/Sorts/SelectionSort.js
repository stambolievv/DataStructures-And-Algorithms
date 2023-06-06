/**
 * @description Performs the Selection Sort algorithm to sort an array.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 * @timecomplexity O(n^2)- The time complexity of the Selection Sort algorithm is O(n^2), where n is the length of the array. The algorithm requires two nested loops to iterate through the array, resulting in a quadratic time complexity. However, the number of swaps performed by the algorithm is minimal, making it efficient for small arrays or arrays with a small number of swaps as the dominant factor.
 * @summary
 * The Selection Sort algorithm sorts an array by repeatedly finding the minimum element from the unsorted part of the array and placing it at the beginning.
 * It divides the array into two parts: the sorted part at the beginning and the unsorted part at the remaining positions.
 * In each iteration, the algorithm finds the minimum element from the unsorted part and swaps it with the element at the current position.
 * This process continues until the entire array is sorted.
 * This function performs the Selection Sort algorithm on the given array and returns the sorted array.
 * Modifies the original by sorting it array in place.
 * @see {@link https://en.wikipedia.org/wiki/Selection_sort Selection Sort Algorithm} for further information.
 */
export default function selectionSort(array) {
  if (array.length <= 1) return array;

  for (let i = 0; i < array.length - 1; i++) {

    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array;
}