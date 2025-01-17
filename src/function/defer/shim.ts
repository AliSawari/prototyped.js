import defer from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Function {
    defer(...args: unknown[]): NodeJS.Timeout;
  }
}

/**
 * Defers invoking the function until the current call stack has cleared
 * @memberof Function.prototype
 * @function defer
 * @param {Array} args
 * @returns {*}
 * @example
 * const test = (msg) => console.log(msg);
 * test.defer('a'), test('b'); // logs 'b' then 'a'
 */
addPrototype(Function, "defer", defer);
