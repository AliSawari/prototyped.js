import * as pluralize from "./method";

export { };

declare global {
  interface String {
    pluralize(value: number, plural?: string): string;
  }
}

/**
 * Returns the singular or plural form of the word based on the input number
 * @memberof String
 * @param {number} value
 * @param {string} [plural]
 * @returns {string}
 * @example
 * 'apple'.pluralize(0); // 'apples'
 * 'apple'.pluralize(1); // 'apple'
 * 'apple'.pluralize(2); // 'apples'
 * 'person'.pluralize(2, 'people'); // 'people'
 */
String.prototype.pluralize = function(value: number, plural?: string): string {
  return pluralize(this as string, value, plural);
};
