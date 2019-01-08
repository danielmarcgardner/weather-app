export const findIndex = (arr, callback) => {
  let index = -1;
  arr.forEach((item, i) => {
    if (callback(item)) {
      index = i;
    }
  });
  return index;
};
