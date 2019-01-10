import React from 'react';
import { FiveDay, mapStateToProps } from './index';
import { shallow } from 'enzyme';
import FiveDayCard from '../../components/five-day-card';
import HeroWeatherDisplay from '../../components/hero-weather-display';
import testdata from '../../utils/mock-test-data';

describe('<FiveDay />', () => {
  const props = {
    weatherZip: testdata[0],
    getWeatherByZipCode: jest.fn(),
    match: { params: { zip: '94122' } },
    removeZip: jest.fn(),
    history: { push: jest.fn() }
  };

  const comp = shallow(<FiveDay { ...props } />);

  test('renders', () => {
    expect(comp.find('.fiveday')).toExist();
    expect(comp.find(FiveDayCard)).toHaveLength(5);
    expect(comp.find(HeroWeatherDisplay)).not.toExist();
  });

  test('click functionality works', () => {
    comp.find(FiveDayCard).at(0).prop('showMore')(0);
    expect(comp.state('index')).toEqual(0);
    expect(comp.find(HeroWeatherDisplay)).toExist();
    expect(comp.find(HeroWeatherDisplay).props()).toEqual({ ...testdata[0].forecast.forecastday[0], close: comp.instance().closeHero });
    comp.find(HeroWeatherDisplay).prop('close')();
    expect(comp.state('index')).toEqual(null);

    comp.find('.fiveday__links').at(0).simulate('click');
    expect(props.history.push).toBeCalledWith('/');

    comp.find('.fiveday__links').at(1).simulate('click');
    expect(props.removeZip).toBeCalledWith('94122');
    expect(props.history.push).toBeCalledWith('/');
  });

  test('componentDidMount fetches the weather if it is not in state', () => {
    comp.instance().componentDidMount();
    expect(props.getWeatherByZipCode).not.toBeCalled();
    props.getWeatherByZipCode.mockReset();
    comp.setProps({ weatherZip: null });
    comp.update();
    comp.instance().componentDidMount();
    expect(props.getWeatherByZipCode).toBeCalledWith('94122');
  });

  test('mapStateToProps', () => {
    expect(mapStateToProps({ weather: { weatherZips: testdata } }, { match: { params: { zip: '94122' } } })).toEqual({ weatherZip: testdata[0] });
  });
});
