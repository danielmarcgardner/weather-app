import moment from 'moment';

export const isMoreThan5MinOld = (time) => {
  const now = moment().utc();
  const passedTime = moment(time).utc().add(5, 'minutes');
  return now.isSameOrAfter(passedTime);
};
