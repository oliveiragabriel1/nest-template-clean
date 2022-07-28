/**
 * This function concatenates two arrays into an object of pair-value.
 * The first array become the keys and the second array, the values.
 * @param {unknown[]} array1 - array of unknown type
 * @param {unknown[]} array2 - array of unknown type
 * @returns {{ [key: string]: any }} - object with keys(array1) and values(array2)
 */
const concatArraysIntoObject = (
  array1: unknown[],
  array2: unknown[],
): { [key: string]: any } => {
  const resultObj: { [key: string]: any } = {};
  array1.forEach((el, index) => (resultObj[`${el}`] = array2[index]));
  return resultObj;
};

export { concatArraysIntoObject };
