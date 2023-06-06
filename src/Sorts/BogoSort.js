
/**
 * @description Performs the Bogo Sort algorithm to sort an array.
 * @param {number[]} array - The array to be sorted.
 * @returns {number[]} - The sorted array.
 * @timecomplexity O(n * n!) - The time complexity of the Bogo Sort algorithm is highly variable and can be extremely high. On average, the algorithm has a time complexity of O(n  * n!), where n is the length of the array. In the worst case, the algorithm can run indefinitely, making it highly inefficient and impractical for sorting large arrays.
 * @summary
 * The Bogo Sort algorithm is a highly inefficient sorting algorithm that works by repeatedly shuffling the elements of the array until it becomes sorted.
 * It generates random permutations of the array and checks if the permutation is sorted.
 * If the array is not sorted, it shuffles the elements again and repeats the process.
 * This continues until a sorted permutation is found.
 * Modifies the original by sorting it array in place.
 * @see {@link https://en.wikipedia.org/wiki/Bogosort Bogo Sort Algorithm} for further information.
 */
export default function bogoSort(array) {
  if (array.length <= 1) return array;

  while (!isSorted(array)) shuffle(array);

  return array;
}

/**
 * @description Checks if an array is sorted in non-decreasing order.
 * @param {*} array - The array to check.
 * @returns {boolean} - `true` if the array is sorted, `false` otherwise.
 */
function isSorted(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) return false;
  }
  return true;
}

/**
 * @description Shuffles the elements of an array randomly.
 * @param {number[]} array - The array to be shuffled.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}