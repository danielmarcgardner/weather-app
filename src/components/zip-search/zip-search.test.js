import React from 'react';
import { ZipSearch } from './index';
import { shallow } from 'enzyme';
import Input from '../../atoms/input';
import Button from '../../atoms/button';

describe('<ZipSearch />', () => {
  const props = { search: jest.fn() };
  const comp = shallow(<ZipSearch { ...props } />);

  test('renders', () => {
    //Renders
    expect(comp.find('.zip-search')).toExist();
    expect(comp.find(Input)).toExist();
    expect(comp.find(Button)).toExist();
  });

  xtest('setFormState works as expected', () => {
    //Input is correctly setting state
    comp.find(Input).prop('setFormState')({ zip: 94122 });
    expect(comp.state()).toEqual({ zip: 94122, error: '' });
  });

  test('handleSubmit works as expected', () => {
    //Set a bad state
    comp.find(Input).prop('setFormState')({ zip: 94122 });
    comp.simulate('submit');
    expect(props.search).toBeCalledWith(94122);
    expect(comp.state()).toEqual({ zip: '', error: '' });
  });
  test('handleSubmit validates bad inputs', () => {
    props.search.mockReset();
    comp.setState({ zip: 'sf' });
    comp.instance().handleSubmit({ preventDefault: jest.fn() });
    expect(props.search).not.toBeCalled();
    expect(comp.state()).toEqual({ zip: 'sf', error: 'Form error: invalid zip code' });
  });
});
