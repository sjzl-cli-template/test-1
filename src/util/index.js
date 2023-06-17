/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments", "deepClone");
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  });
  return targetObj;
}

export function getTreeArrayId(data) {
  let tree = deepClone(data);
  if (!tree || !Array.isArray(tree)) return [];
  fn(tree);

  function fn(arr, parentId = "") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].tasks && arr[i].tasks.length > 0) {
        arr[i].templateId = `${parentId !== "" ? parentId + "." : ""}${i + 1}`;
        fn(arr[i].tasks, `${parentId !== "" ? parentId + "." : ""}${i + 1}`);
      } else {
        arr[i].templateId = `${parentId !== "" ? parentId + "." : ""}${i + 1}`;
      }
    }
  }

  return tree;
}
