import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './index';

describe('<Button />', () => {
  const props = {
    onClick: jest.fn(),
    className: 'test',
    disabled: false,
    text: 'Test Me!',
    color: 'blue'
  };
  const comp = shallow(<Button { ...props } />);

  test('renders to the page', () => {
    //Renders to the page
    expect(comp.find('button')).toExist();
    expect(comp.find('button')).toHaveClassName('button test is-blue');
    expect(comp.find('button').text()).toEqual('Test Me!');
    comp.setProps({ disabled: true, className: '' });
    //Correct class name if the form disables it
    expect(comp.find('button')).toHaveClassName('button is-disabled is-blue');
  });

  test('onClick is called when clicked', () => {
    comp.find('button').simulate('click');
    //Onclick called correctly
    expect(props.onClick).toBeCalled();
  });
});
