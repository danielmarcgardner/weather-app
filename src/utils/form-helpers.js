//Return null if the inputs are good.
export const validators = {
  //eslint-disable-next-line
  presence: () => (val) => val ? null : 'no value', //returns 'no value if there is no input'
  zipCode: () => (val) => /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(val) ? null : 'invalid zip code', //Zipcode validator
  multiple: (arr) => (val) => arr.reduce((acc, validator) => validator(val) ? acc.concat(validator(val)) : acc, []).join(' and ') //If multiple validations are needed this takes an array of validations and runs them
};
