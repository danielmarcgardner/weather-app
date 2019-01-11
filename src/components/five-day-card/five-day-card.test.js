import React from 'react';
import { FiveDayCard } from './index';
import { shallow } from 'enzyme';
import testdata from '../../utils/mock-test-data';

describe('<FiveDayCard />', () => {
  const props = {
    ...testdata[0].forecast.forecastday[0],
    showMore: jest.fn(),
    index: 0
  };

  const comp = shallow(<FiveDayCard { ...props } />);

  test('renders to the page', () => {
    //Renders to the page and has correct text
    expect(comp.find('.fivedaycard')).toExist();
    expect(comp.find('h4').text()).toEqual('Wednesday');
    expect(comp.find('h5').text()).toEqual('January 9th 2019');
    expect(comp.find('img').prop('src')).toEqual('https://cdn.apixu.com/weather/64x64/night/116.png');
    expect(comp.find('.fivedaycard__temps--max').text()).toEqual('55.8 ℉');
    //Clicking triggers the show more function
    comp.find('.fivedaycard__temps--viewmore').simulate('click');
    expect(props.showMore).toBeCalledWith(0);

    //Testing default function prop that it does not throw an error for undefined prop
    comp.setProps({ showMore: undefined });
    comp.find('.fivedaycard__temps--viewmore').simulate('click');
  });
});
