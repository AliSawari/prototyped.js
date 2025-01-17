export default function defer<
  Args extends unknown[],
  F extends (...args: Args) => unknown,
>(func: F, ...args: Args): NodeJS.Timeout {
  return setTimeout(func, 1, ...args);
}
