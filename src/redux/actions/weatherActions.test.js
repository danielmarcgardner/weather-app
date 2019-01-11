import { removeZip, getWeatherByZipCode } from './weatherActions';
import testdata from '../../utils/mock-test-data';
import moment from 'moment';

describe('Weather Actions', () => {
  test('removeZip', () => {
    expect(removeZip('94107')).toEqual({ type: 'DELETE_ZIP', zip:'94107' });
  });
  test('getWeatherByZipCode', async () => {
    const timestamp = moment();
    const dispatch = jest.fn();
    const getState = () => ({ weather: { weatherZips: testdata } });
    const data = { current: 'sunny' };
    const api = { Api: { getWeatherByZipCode: jest.fn(() => Promise.resolve({ data })) } };

    await getWeatherByZipCode('94107')(dispatch, getState, api);

    expect(dispatch).toBeCalledWith({
      type: 'RECEIVE_ZIP',
      data: { data, zip: '94107', fetchedAt: timestamp }
    });
    dispatch.mockReset();
    await getWeatherByZipCode('94122', timestamp)(dispatch, getState, api);

    expect(dispatch).toBeCalledWith({
      type: 'RECEIVE_ZIP',
      data: { data, zip: '94122', fetchedAt: timestamp }
    });

    dispatch.mockReset();
    const apiFail = { Api: { getWeatherByZipCode: jest.fn(() => Promise.reject({ error: 'ERROR!' })) } };
    await getWeatherByZipCode('94107', timestamp)(dispatch, getState, apiFail);
    expect(dispatch).toBeCalledWith({
      type: 'RECEIVE_ZIP',
      data: { error: true, zip: '94107' }
    });

    dispatch.mockReset();
    await getWeatherByZipCode('94121', timestamp)(dispatch, getState, api);

    expect(dispatch).not.toBeCalled();
  });
});
