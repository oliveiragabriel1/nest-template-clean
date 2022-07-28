/**
 * This function is used to check if an array is empty and exists
 * @param {unknown[]} array - arr to be evaluated
 * @returns {boolean}
 */
const isArrayEmpty = (arr: any[]): boolean =>
  !(Array.isArray(arr) && arr.length);

export { isArrayEmpty };
