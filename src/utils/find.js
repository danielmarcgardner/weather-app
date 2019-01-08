export const findIndex = (arr, callback) => {
  let index = -1;
  arr.forEach((item, i) => {
    if (callback(item)) {
      index = i;
    }
  });
  return index;
};

export const find = (arr, callback) => {
  let found = null;
  arr.forEach((item) => {
    if (callback(item)) {
      found = item;
    }
  });
  return found;
};
