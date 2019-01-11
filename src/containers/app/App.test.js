import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import ZipRefreshWrapper from '../zip-refresh-wrapper';

describe('<App />', () => {
  const comp = shallow(<App />);
  test('renders without crashing', () => {
    expect(comp.find(BrowserRouter)).toExist();
    expect(comp.find('.app')).toExist();
    expect(comp.find(Routes)).toExist();
    expect(comp.find(ZipRefreshWrapper).prop('interval')).toEqual(30000);
  });
});
