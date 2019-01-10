import React from 'react';
import { Landing, mapStateToProps } from './index';
import { shallow } from 'enzyme';
import ZipSearch from '../../components/zip-search';
import ZipCard from '../../components/zip-card';
import testdata from '../../utils/mock-test-data';

describe('<Landing />', () => {
  const props = {
    getWeatherByZipCode: jest.fn(),
    weather: testdata,
    removeZip: jest.fn()
  };
  const comp = shallow(<Landing { ...props } />);

  test('renders', () => {
    expect(comp.find('.landing')).toExist();
    expect(comp.find(ZipSearch)).toExist();
    expect(comp.find(ZipSearch).prop('search')).toEqual(props.getWeatherByZipCode);
    expect(comp.find(ZipCard)).toHaveLength(2);
    comp.find(ZipCard).at(1).prop('remove')('94121');
    expect(props.removeZip).toBeCalledWith('94121');
  });

  test('mapStateToProps', () => {
    expect(mapStateToProps({ weather: { weatherZips: testdata }, other: 'Hello World' })).toEqual({ weather: testdata });
  });
});
