import invert from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface Object {
    $invert(): Record<string, unknown>;
  }
}

/**
 * Inverts the key-value pairs of the object, without mutating it
 * @memberof Object.prototype
 * @function $invert
 * @returns {Object}
 * @example
 * ({ name: "John", age: 20 }).$invert(); // { 20: "age", John: "name" }
 */
addPrototype(Object, "$invert", invert);
