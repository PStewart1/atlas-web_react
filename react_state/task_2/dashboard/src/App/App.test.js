/**
 * @jest-environment jsdom
 */

import App from './App';
import { shallow, mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import {StyleSheetTestUtils} from "aphrodite";
import { AppContext } from './AppContext';
import { act } from 'react-dom/test-utils';

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

  // it('an alert and calls the function logout when ctrl-h is pressed', () => {
  //   const wrapper = mount(<App />);
  //   const logOutSpy = jest.spyOn(wrapper.instance(), 'logOut');
  //   act(() => {
  //     const event = new window.KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
  //     document.dispatchEvent(event);
  //   });
  //   expect(logOutSpy).toHaveBeenCalled();
  //   // expect(alertMock).toHaveBeenCalledWith('Logging you out');
  //   expect(global.alert).toHaveBeenCalledWith('logging you out');
  //   logOutSpy.mockRestore();
  // });

  it('Tests that App does not render a Login component when isLoggedIn is true', () => {

    const wrapper = shallow(
			<AppContext.Provider value={context}>
				<App />
			</AppContext.Provider>
		)
    // const wrapper = shallow(<App user.isLoggedIn={true} />);
    expect(wrapper.find('Login').exists()).toBe(false);
  });

  // it('Tests that App renders a CourseList component when isLoggedIn is true', () => {

  //   const wrapper = mount(
	// 		<AppContext.Provider value={context}>
	// 			<App />
	// 		</AppContext.Provider>
	// 	)
  //   expect(wrapper.find('CourseList').exists()).toBe(true);
  // });

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
});
