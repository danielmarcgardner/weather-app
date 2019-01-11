import rootReducer from './index';

describe('rootReducer', () => {
  test('returns default state', () => {
    expect(rootReducer(undefined, undefined)).toEqual({ weather: { weatherZips: [] } });
  });
});
