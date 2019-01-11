//Handy utility function for finding index of an item.
export const findIndex = (arr, callback) => {
  let index = -1;
  arr.forEach((item, i) => {
    if (callback(item)) {
      index = i;
    }
  });
  return index;
};

//Handy utility function for finding an item.
export const find = (arr, callback) => {
  let found = null;
  arr.forEach((item) => {
    if (callback(item)) {
      found = item;
    }
  });
  return found;
};
