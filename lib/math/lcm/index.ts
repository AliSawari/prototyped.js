import * as method from "./method";

declare global {
  interface Math {
    lcm(...nums: number[]): number;
  }
}

/**
 * Returns the least common multiple of two or more numbers
 * @memberof Math
 * @param {number[]} nums
 * @returns {number}
 * @example
 * Math.lcm(12, 7); // 84
 * Math.lcm(...[1, 3, 4, 5]); // 60
 */
Math.lcm = method;