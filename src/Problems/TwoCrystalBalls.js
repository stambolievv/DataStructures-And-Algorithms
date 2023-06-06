/**
 * @description Determines the exact spot at which a crystal ball will break using a hybrid of jumping and scanning.
 * @param {boolean[]} array - An array indicating whether a crystal ball breaks at each spot.
 * @returns {number} - The exact spot at which the crystal ball will break, or -1 if it won't break within the given constraints.
 * @timecomplexity O(sqrt(n)) - The function performs a hybrid strategy of jumping and scanning, where the number of jumps is proportional to the square root of the array length. In the worst case, where the ball breaks at the last spot or doesn't break at all, the function performs O(sqrt(n)) operations.
 * @summary
 * You are given two crystal balls that will break if dropped from a high enough distance.
 * The goal is to determine the exact spot in which the crystal ball will break in the most optimized way, using only two tries.
 * The solution employs a hybrid strategy of jumping and scanning, combining divide and linear search.
 * The idea is to jump a certain distance (k) at a time until a ball breaks.
 * Then, the function walks back from the previous jump until it finds the critical point where the ball breaks.
 * The problem states that halving doesn't work because, in the worst case, it would require walking half the array.
 * This approach fails specifically when the length of the array is not a perfect square (e.g. 257).
 * In such cases, additional logic is needed to handle the left-out portion of the array.
 * The function divides the array into intervals by using the square root of the array length as the jump amount (amount = floor(sqrt(array.length))).
 * It starts jumping at the interval position and checks if the ball breaks.
 * If it breaks, it walks back from the previous jump until it finds the critical point.
 * If it doesn't break, it continues jumping at the next interval until it reaches the end of the array.
 * The function returns the exact spot at which the crystal ball will break, or -1 if it won't break within the given constraints.
 */
export default function twoCrystalBalls(array) {
  const jumpAmount = Math.floor(Math.sqrt(array.length));

  let i = 0;

  for (; i < array.length; i += jumpAmount) {
    if (array[i]) break;
  }

  i -= jumpAmount;

  for (let j = 0; j <= jumpAmount && i < array.length; j++, i++) {
    if (array[i]) return i;
  }

  return -1;
}