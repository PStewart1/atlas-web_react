import Login from './Login';
import React from 'react';
import { shallow } from 'enzyme';
import {StyleSheetTestUtils} from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {
  it('Tests that Login renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Tests that Login renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(3);
    expect(wrapper.find('label').length).toBe(2);
  });

  it('verifies that the submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('verifies that when the email and password are filled in, the button is enabled', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'email@dot.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'P455w0Rd' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });

});