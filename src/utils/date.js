import moment from 'moment';

//Used to determine if a time is more than 5 min old and needs to be updated
export const isMoreThan5MinOld = (time) => {
  const now = moment().utc();
  const passedTime = moment(time).utc().add(5, 'minutes');
  return now.isSameOrAfter(passedTime); //Returns true or false
};
