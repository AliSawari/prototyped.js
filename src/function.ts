/**
 * @namespace Function
 */

interface Function {
  called?: boolean
  once(...args: Array<any>): any
  defer(...args: Array<any>): any
  cached?: Array<{ key: String, result: any }>
  cache(...args: Array<any>): any
}

if (!Function.prototype.once) {
  /**
   * Ensures a function is called only once
   * @param {Array} args
   * @returns {*}
   * @example
   * const test = (msg) => console.log(msg);
   * test.once('a'); // logs 'a'
   * test.once('b'); // no log this time
   */
  Function.prototype.once = function(...args) {
    if (this.called) return;

    this.called = true

    return this.call(this, ...args)
  }
}

if (!Function.prototype.defer) {
  /**
   * Defers invoking the function until the current call stack has cleared
   * @param {Array} args
   * @returns {*}
   * @example
   * const test = (msg) => console.log(msg);
   * test.defer('a'), test('b'); // logs 'b' then 'a'
   */
  Function.prototype.defer = function(...args) {
    return setTimeout(this, 1, ...args)
  }
}

if (!Function.prototype.cache) {
  /**
   * Returns the cached function results if already runned with this method
   * @param {Array} args
   * @returns {*}
   * @example
   * const test = () => setTimeout(console.log, 1000, `test`);
   * test.cache(); // takes a second to log 'test'
   * test.cache(); // instantly logs the second 'test'
   */
  Function.prototype.cache = function(...args) {
    let key = JSON.stringify(args)
    let cached = this.cached || []

    let index = cached.findIndex((c: OBJ) => c.key === args)
    if (index !== -1) return cached[index].result

    let result = this.call(this, ...args)

    cached.push({
      key,
      result
    })

    this.cached = cached

    return result
  }
}