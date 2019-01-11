import React from 'react';
import { ZipRefreshWrapper, mapStateToProps } from './index';
import { shallow } from 'enzyme';
import testdata from '../../utils/mock-test-data';

describe('<ZipRefreshWrapper />', () => {
  const props = {
    weatherZips: ['94122', '94121'],
    interval: 1000,
    getWeatherByZipCode: jest.fn(),
    children: <div className="child-div">App</div>
  };
  const comp = shallow(<ZipRefreshWrapper { ...props } />, { lifecycleExperimental: true });

  test('renders children', () => {
    //Renders the children
    expect(comp.find('.child-div')).toExist();
  });

  test('setInverval works as expected', () => {
    //Mount component to start timer.
    comp.instance().componentDidMount();
    jest.useFakeTimers();
    jest.advanceTimersByTime(1001); //Advance to the next iteration
    jest.runAllTimers();
    comp.update();
    //Called 4 times since 2 on initial mount and 2 a second later since the interval for testing is 1000
    expect(props.getWeatherByZipCode).toHaveBeenCalledTimes(4);
  });

  test('componentWillUnmount clears interval', () => {
    comp.instance().componentWillUnmount();
    expect(clearInterval).toBeCalled();
  });

  test('componentDidMount will not call getWeatherByZipCode if no zips', () => {
    props.getWeatherByZipCode.mockReset();
    comp.setProps({ weatherZips: [] });
    comp.instance().componentDidMount();
    expect(props.getWeatherByZipCode).not.toBeCalled();
  });

  test('mapStateToProps', () => {
    const state = { weather: { weatherZips: testdata } };
    expect(mapStateToProps(state)).toEqual({ weatherZips: ['94122', '94121'] });
  });
});
