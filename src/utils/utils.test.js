import { isMoreThan5MinOld } from './date';
import { validators } from './form-helpers';
import { findIndex, find } from './find';
import moment from 'moment';

describe('Utils', () => {
  test('isMoreThan5MinOld', () => {
    const dateOlderThan5Min = moment().subtract(300001, 'millisecond'); //5 minutes plus 1 millisecond
    expect(isMoreThan5MinOld(dateOlderThan5Min)).toEqual(true);
    const dateLessThan5MinOld = moment().subtract(299999, 'millisecond'); //Just under 5 min
    expect(isMoreThan5MinOld(dateLessThan5MinOld)).toEqual(false);
  });

  test('validators', () => {
    expect(validators.presence()()).toEqual('no value');
    expect(validators.presence()('hello world')).toEqual(null);
    expect(validators.zipCode()(94122)).toEqual(null);
    expect(validators.zipCode()('94122')).toEqual(null);
    expect(validators.zipCode()('94122-1234')).toEqual(null);
    expect(validators.zipCode()('94122-123')).toEqual('invalid zip code');
    expect(validators.zipCode()('9412')).toEqual('invalid zip code');
    expect(validators.zipCode()('San Francisco')).toEqual('invalid zip code');
    expect(validators.multiple([validators.zipCode(), validators.presence()])()).toEqual('invalid zip code and no value');
    expect(validators.multiple([validators.zipCode(), validators.presence()])('San Francisco')).toEqual('invalid zip code');
    expect(validators.multiple([validators.zipCode(), validators.presence()])(94122)).toEqual('');
  });

  test('findIndex and find', () => {
    const testArr = [{ zip: 94122 }, { zip: 94121 }, { zip:94107 }];
    expect(findIndex(testArr, (obj) => obj.zip === 94122)).toEqual(0);
    expect(findIndex(testArr, (obj) => obj.zip === 90210)).toEqual(-1);
    expect(findIndex(testArr, (obj) => obj.zip === 94107)).toEqual(2);
    expect(find(testArr, (obj) => obj.zip === 94122)).toEqual({ zip: 94122 });
    expect(find(testArr, (obj) => obj.zip === 90210)).toEqual(null);
  });
});
