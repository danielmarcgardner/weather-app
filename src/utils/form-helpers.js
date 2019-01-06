export const validators = {
  //eslint-disable-next-line
  presence: () => (val) => val ? null : 'no value',
  zipCode: () => (val) => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(val) ? null : 'invalid zip code',
  multiple: (arr) => (val) => arr.reduce((acc, validator) => validator(val) ? acc.concat(validator(val)) : acc, []).join(' and ')
};
