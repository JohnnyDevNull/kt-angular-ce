/**
 * @source: https://stackoverflow.com/questions/44134212/best-way-to-flatten-js-object-keys-and-values-to-a-single-depth-array
 */
export function flattenObject(obj: any, sep = '_', parent: any = null, res: any = {}) {
  for (const key in obj) {
    const propName = parent ? parent + sep + key : key;
    if (typeof obj[key] === 'object') {
      flattenObject(obj[key], sep, propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}
