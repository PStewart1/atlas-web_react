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
  // Verify that the components renders 2 input tags and 2 label tags
  it('Tests that Login renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(3);
    expect(wrapper.find('label').length).toBe(2);
  });

});