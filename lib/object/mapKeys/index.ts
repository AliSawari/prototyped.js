import { addPrototype } from '../utils'

export { }

declare global {
  interface Object {
    mapKeys(fn: (value: any, key: string | number, object: object) => any): object
  }
}

/**
 * Creates an object with keys generated by running the provided function for each key and the same values as the provided object
 * @memberof Object.prototype
 * @param {function} fn
 * @returns {Object}
 * @example
 * { a: 1, b: 2 }.mapKeys((val, key) => key + val); // { a1: 1, b2: 2 }
 */
function mapKeys(this: { [key: string]: any }, fn: (value: any, key: string | number, object: object) => any): object {
  return Object.keys(this).reduce((acc: { [key: string]: any }, k) => {
    acc[fn(this[k], k, this)] = this[k]

    return acc
  }, {})
}

addPrototype('mapKeys', mapKeys)
