import React from 'react';
import { Routes } from './index';
import { shallow } from 'enzyme';
import { Switch, Route } from 'react-router-dom';

describe('<Routes />', () => {
  const comp = shallow(<Routes />);
  test('renders', () => {
    expect(comp.find(Switch)).toExist();
    expect(comp.find(Route)).toHaveLength(3);
  });
});
