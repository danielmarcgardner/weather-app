import WeatherReducer from './weatherReducer';
import testdata from '../../utils/mock-test-data';

describe('WeatherReducer', () => {
  test('returns initial state', () => {
    expect(WeatherReducer(undefined, undefined)).toEqual({ weatherZips: [] });
  });
  test('handles DELETE_ZIP', () => {
    expect(WeatherReducer(undefined, { type: 'DELETE_ZIP', zip: '94122' })).toEqual({ weatherZips: [] });
    expect(WeatherReducer({ weatherZips: testdata }, { type: 'DELETE_ZIP', zip: '94122' })).toEqual({ weatherZips: testdata.slice(1) });
  });
  test('handles RECEIVE_ZIP', () => {
    expect(WeatherReducer(undefined, { type: 'RECEIVE_ZIP', data: { zip: '94122', ...testdata[0] } })).toEqual({ weatherZips: [testdata[0]] });
    expect(WeatherReducer({ weatherZips: [testdata[0]] }, { type: 'RECEIVE_ZIP', data:{ zip: '94122', ...testdata[0], changed: true } })).toEqual(
      { weatherZips:[{ zip: '94122', ...testdata[0], changed: true }] }
    );
    expect(WeatherReducer({ weatherZips: [testdata[0]] }, { type: 'RECEIVE_ZIP', data: { zip: '94121', ...testdata[1] } })).toEqual({ weatherZips: testdata });
  });
});
