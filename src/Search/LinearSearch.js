/**
 * @description Performs a linear search to find the presence of a value in an array.
 * @param {number[]} array - The array in which to search for the value.
 * @param {number} target - The value to search for.
 * @returns {boolean} - Indicates whether the value is found in the array.
 * @timecomplexity O(n) - The function visits each element once during the search process, resulting in a time complexity of linear, where `n` is the length of the array. In the worst-case scenario, where the element is located at the end of the array or not present at all, the function will need to iterate over all elements to determine the result.
 * @summary
 * The function performs a linear search, also known as sequential search, to find the presence of a value in an array.
 * It iterates over each element of the array from start to end, checking if each element is equal to the target value.
 * If a match is found, the function immediately returns true.
 * If the entire array is traversed without finding a match, the function returns false.
 * @see {@link https://en.wikipedia.org/wiki/Linear_search Linear Search Algorithm} for further information.
 */
export default function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return true;
  }

  return false;
}