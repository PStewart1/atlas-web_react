import App from './App';
import { shallow, mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import {StyleSheetTestUtils} from "aphrodite";
import { AppContext } from './AppContext';
import { mapStateToProps } from './App'; 
import { fromJS } from 'immutable';

StyleSheetTestUtils.suppressStyleInjection();

window.alert = sinon.spy();
global.window = window;
global.document = window.document;
global.alert = jest.fn();

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
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList').exists()).toBe(false);
  });
});


describe('<App /> with isLoggedIn', () => {
  const logout = jest.fn(() => console.log('logout running'));
  const alert = jest.spyOn(window, 'alert');
  const context = { user: { email: "me@email.com", password: "123", isLoggedIn: true }};

  it('Tests that App does not render a Login component when isLoggedIn is true', () => {

    const wrapper = shallow(
			<AppContext.Provider value={context}>
				<App />
			</AppContext.Provider>
		)
    expect(wrapper.find('Login').exists()).toBe(false);
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

  it('verifies that after calling login, the state is updated correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().login('me@email.com', '123');
    expect(wrapper.state().user.isLoggedIn).toBe(true);
  });

  it('verifies that after calling logOut, the state is updated to false', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logOut();
    expect(wrapper.state().user.isLoggedIn).toBe(false);
  });

  it('verifies that markNotificationAsRead removes the notification correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state().listNotifications.some(notification => notification.id === 1)).toBe(false);
  });

  it('verify that mapStateToProps returns the right object', () => {
    let state = fromJS({
      isUserLoggedIn: true
    });
    const result = mapStateToProps(state);
    expect(result).toEqual({isLoggedIn: true});
  });
});
