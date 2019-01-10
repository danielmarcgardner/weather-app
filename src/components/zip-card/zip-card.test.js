import React from 'react';
import { ZipCard } from './index';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import testdata from '../../utils/mock-test-data';

describe('<ZipCard', () => {
  const props = {
    ...testdata[0],
    remove: jest.fn()
  };
  const comp = shallow(<ZipCard { ...props } />);

  test('renders', () => {
    //Renders to page
    expect(comp.find('.zipcard')).toExist();
    expect(comp.find('.zipcard__notfound')).not.toExist();
    expect(comp.find('.zipcard__header--city').text()).toEqual('San Francisco,');
    expect(comp.find(Link).prop('to')).toEqual('/zip/94122');
  });

  test('clicking the remove item calls the correct function', () => {
    //Click functionality works
    comp.find('.zipcard__close').simulate('click');
    expect(props.remove).toBeCalled();
  });

  test('renders with invalid zip', () => {
    //Renders when an invalid zip[ is present
    comp.setProps({ location: null, current: null });
    expect(comp.find('.zipcard__notfound')).toExist();
  });
});
