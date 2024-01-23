/**
 * @jest-environment jsdom
 */

import App from './App';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import {StyleSheetTestUtils} from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

window.alert = sinon.spy();

describe('<App />', () => {
  it('Tests that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // should contain the Notifications component
  it('Tests that App renders a Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').exists()).toBe(true);
  });

  // should contain the Header component
  it('Tests that App renders a Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  // should contain the Login component
  it('Tests that App renders a Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login').exists()).toBe(true);
  });

  // should contain the Footer component
  it('Tests that App renders a Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').exists()).toBe(true);
  });
  // check that CourseList is not displayed when isLoggedIn is false
  it('Tests that App does not render a CourseList component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find('CourseList').exists()).toBe(false);
  });
});

describe('<App /> with isLoggedIn', () => {
  const logout = jest.fn(() => console.log('logout running'));
  const alert = jest.spyOn(window, 'alert');

  it('an alert and calls the function logout when ctrl-h is pressed', () => {
    const wrapper = shallow(<App isLoggedIn={true} logOut={logout} />);
    wrapper.instance().handleKeydown({ ctrlKey: true, key: 'h' });
    expect(alert).toHaveBeenCalledWith('Logging you out');
    expect(logout).toHaveBeenCalled();
  });

  // Login component is not displayed when isLoggedIn is true
  it('Tests that App does not render a Login component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login').exists()).toBe(false);
  });
  // CourseList component is displayed when isLoggedIn is true
  it('Tests that App renders a CourseList component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList').exists()).toBe(true);
  });
});
