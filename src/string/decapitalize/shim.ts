import decapitalize from ".";
import { addPrototype } from "../../utils";

declare global {
  interface String {
    decapitalize(allWords?: boolean): string;
  }
}

/**
 * Returns the decapitalized string
 * @memberof String.prototype
 * @function decapitalize
 * @param {Boolean} [allWords=false]
 * @returns {String}
 * @example
 * 'Foo Bar'.decapitalize(); // 'foo Bar'
 * 'Hello World'.decapitalize(true); // 'hello world'
 */
addPrototype(String, "decapitalize", decapitalize);
