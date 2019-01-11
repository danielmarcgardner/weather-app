import React from 'react';
import { HeroWeatherDisplay } from './index';
import { shallow } from 'enzyme';
import testdata from '../../utils/mock-test-data';

describe('<HeroWeatherDisplay />', () => {
  const props = {
    ...testdata[0].forecast.forecastday[0],
    close: jest.fn()
  };
  const comp = shallow(<HeroWeatherDisplay { ...props } />);

  test('renders to the page', () => {
    //Renders
    expect(comp.find('.hero')).toExist();
    expect(comp.find('h4').text()).toEqual('Date: January 9th 2019');
    expect(comp.find('.hero__list--li')).toHaveLength(12);
    expect(comp.find('.hero__list--li').at(0).text()).toEqual('Sunrise: 07:26 AM');
  });

  test('close button works as expected', () => {
    comp.find('.hero__close').simulate('click');
    expect(props.close).toBeCalled();
  });
});
