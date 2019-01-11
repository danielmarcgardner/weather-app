import React from 'react';
import { Whoops } from './index';
import { shallow } from 'enzyme';

describe('<Whoops />', () => {
  const comp = shallow(<Whoops />);

  test('renders', () => {
    expect(comp.find('.whoops')).toExist();
    expect(comp.find('img').prop('src')).toEqual('https://media.giphy.com/media/87qWljUiX4Q1y/giphy.gif');
  });
});
