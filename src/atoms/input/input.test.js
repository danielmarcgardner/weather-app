import React from 'react';
import { Input } from './index';
import { shallow } from 'enzyme';

describe('<Input />', () => {
  const props = {
    placeholder: 'Test Placeholder',
    formKey: 'testInput',
    inputState: {
      testInput: 'hello world',
      otherInput: 'foobar'
    },
    className: 'testInput',
    error: null,
    setFormState: jest.fn()
  };

  const comp = shallow(<Input { ...props } />);

  test('renders to the page and has correct functionality', () => {
    //It renders
    expect(comp.find('.input')).toExist();
    expect(comp.state()).toEqual({ focus: false });
    expect(comp.find('.input__border')).toHaveClassName('input__border');
    expect(comp.find('.input__error')).not.toExist();
    //User focuses and has correct classname
    comp.find('input').prop('onFocus')();
    expect(comp.state()).toEqual({ focus: true });
    expect(comp.find('.input__border')).toHaveClassName('input__border is-focused');
    expect(comp.find('input').prop('value')).toEqual('hello world');
    //Onchange event sets parent form correctly
    comp.find('input').prop('onChange')({ target: { value: 'hello world x2' } });
    expect(props.setFormState).toBeCalledWith({ testInput: 'hello world x2' });
    comp.find('input').prop('onBlur')();
    expect(comp.state()).toEqual({ focus: false });
    expect(comp.find('.input__border')).toHaveClassName('input__border');
    //Error reported in parent form
    comp.setProps({ error: 'Invalid submission' });
    expect(comp.find('.input__error')).toExist();
    expect(comp.find('.input__error').text()).toEqual('Invalid submission');
  });
});
