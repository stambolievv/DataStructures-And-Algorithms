/**
 * @description Performs a binary search on a sorted list to determine if a given element exists.
 * @param {number[]} array - The sorted list to search.
 * @param {number} target - The element to find in the list.
 * @returns {boolean} `true` if the element is found, `false` otherwise.
 * @timecomplexity O(log n) - The binary search algorithm divides the search space in half at each step, resulting in a time complexity of logarithmic base 2, where `n` is the length of the list.
 * @summary
 * The function performs a binary search on the given sorted list to find the specified element.
 * It initializes two pointers, `low` and `high`, representing the boundaries of the search range.
 * The algorithm continues to search until the `low` and `high` pointers converge.
 * At each iteration, it calculates the middle index `mid` and compares the value at that index with the `target`.
 * If the value is equal to the `target`, the function returns `true` as the element is found.
 * If the value is greater than the `target`, the `high` pointer is updated to `mid` to search the lower half.
 * If the value is less than the `target`, the `low` pointer is updated to `mid + 1` to search the upper half.
 * The process repeats until the search range is narrowed down to a single element or the `low` and `high` pointers converge.
 * If the element is not found after the search, the function returns `false`.
 * @see {@link https://en.wikipedia.org/wiki/Binary_search_algorithm Binary Search Algorithm} for further information.
 */
export default function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  do {
    const mid = Math.floor(low + (high - low) / 2);
    const value = array[mid];

    if (value === target) return true;
    else if (value > target) high = mid - 1;
    else low = mid + 1;

  } while (low <= high);

  return false;
}