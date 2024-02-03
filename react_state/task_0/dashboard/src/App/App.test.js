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

  it('Tests that App renders a Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').exists()).toBe(true);
  });

  it('Tests that App renders a Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  it('Tests that App renders a Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login').exists()).toBe(true);
  });

  it('Tests that App renders a Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').exists()).toBe(true);
  });

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

  it('Tests that App does not render a Login component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login').exists()).toBe(false);
  });

  it('Tests that App renders a CourseList component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList').exists()).toBe(true);
  });

  it('verifies that the default state for displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('verifies that after calling handleDisplayDrawer, the state is updated to true', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it('verifies that after calling handleHideDrawer, the state is updated to false', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });
});
