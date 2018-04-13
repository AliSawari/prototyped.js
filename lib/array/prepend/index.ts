import * as method from "./method";

declare global {
  interface Array<T> {
    prepend(value?: any): void;
  }
}

/**
 * Adds an item to the beginning of the array
 * @memberof Array
 * @param {*} value
 * @example
 * var myArray = [1, 2, 3]
 * myArray.prepend(0); // myArray => [0, 1, 2, 3]
 */
Array.prototype.prepend = function(value) {
  return method(this, value);
};
