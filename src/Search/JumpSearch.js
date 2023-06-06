/**
 * @description Performs a jump search on a sorted list to determine if a given element exists.
 * @param {number[]} array - The sorted list to search.
 * @param {number} target - The element to find in the list.
 * @returns {boolean} `true` if the element is found, `false` otherwise.
 * @timecomplexity O(sqrt(n)) - The jump search algorithm has a time complexity of O(sqrt(n)), where n is the length of the array. The algorithm performs jumps of size sqrt(n) and then performs a linear search within each block. If the array is very large, the time complexity can be close to O(n) in the worst case.
 * @summary
 * The jump search algorithm starts by making a jump ahead in the sorted list using a fixed step size determined by the square root of the list length.
 * It then performs a linear search within the current block to find the target value.
 * If the target value is found, the function returns true.
 * If the current block does not contain the target value, the algorithm continues making jumps and performing linear searches until the target value is found or the end of the list is reached.
 * If the target value is not found, the function returns false.
 * @see {@link https://en.wikipedia.org/wiki/Jump_search Jump Search Algorithm} for further information.
 */
export default function jumpSearch(array, target) {
  const n = array.length;
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (array[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) return false;
  }

  while (array[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) return false;
  }

  if (array[prev] === target) return true;

  return false;
}