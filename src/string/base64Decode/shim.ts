import base64Decode from "./index.js";
import { addPrototype } from "../../utils.js";

declare global {
  interface String {
    base64Decode(): string;
  }
}

/**
 * Decodes data encoded with MIME base64
 * @memberof String.prototype
 * @function base64Decode
 * @returns {String}
 * @example
 * "cHJvdG90eXBlZC5qcw==".base64Decode(); // "prototyped.js"
 */
addPrototype(String, "base64Decode", base64Decode);
