/**
 * @description Performs the Insertion Sort algorithm to sort an array.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 * @timecomplexity O(n^2) - The time complexity of the Insertion Sort algorithm is O(n^2), where n is the length of the array. The algorithm requires two nested loops to iterate through the array and compare elements, resulting in a quadratic time complexity. However, the algorithm has an advantage when dealing with partially sorted or small arrays, as it can have a linear time complexity in the best case scenario.
 * @description
 * The Insertion Sort algorithm sorts an array by dividing it into a sorted and an unsorted part.
 * It iterates through the unsorted part and picks one element at a time, comparing it with the elements in the sorted part to find its correct position.
 * The algorithm shifts the elements in the sorted part that are greater than the current element one position to the right, and inserts the current element in its correct position.
 * This process continues until the entire array is sorted.
 * This function performs the Insertion Sort algorithm on the given array and returns the sorted array.
 * @see {@link https://en.wikipedia.org/wiki/Insertion_sort Insertion Sort Algorithm} for further information.
 */
export default function insertionSort(array) {
  if (array.length <= 1) return array;

  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
}