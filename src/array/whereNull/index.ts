import { filter } from "../../utils.js";

export default function whereNull<T>(arr: T[], field?: string): T[] {
  const iterator = (item: any) => item === null || item === undefined;

  return filter(arr, field, iterator);
}
