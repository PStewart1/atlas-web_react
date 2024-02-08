import App from './App';
import { shallow, mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import {StyleSheetTestUtils} from "aphrodite";
import { AppContext } from './AppContext';
import { mapStateToProps } from './App'; 
import { fromJS, setIn } from 'immutable';
import {createStore} from "redux";
import { uiReducer, initialState } from "../reducers/uiReducer.js";
import { Provider } from "react-redux";
import { render, screen, act, fireEvent, waitFor} from '@testing-library/react';

StyleSheetTestUtils.suppressStyleInjection();

window.alert = sinon.spy();
global.window = window;
global.document = window.document;
global.alert = jest.fn();

const store = createStore(uiReducer, initialState);

describe('<App />', () => {
  const context = { user: { email: "", password: "", isLoggedIn: false }};

  it('Tests that App renders without crashing', () => {
    const wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider>
		);
    expect(wrapper.exists()).toBe(true);
  });

  it('Tests that App renders a Notifications component', () => {
    const wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider>
		);
    expect(wrapper.find('Notifications').exists()).toBe(true);
  });

  it('Tests that App renders a Header component', () => {
    const wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider>
		);
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  it('Tests that App renders a Login component', () => {
    const wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider>
		);
    expect(wrapper.find('Login').exists()).toBe(true);
  });

  it('Tests that App renders a Footer component', () => {
    const wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider>
		);
    expect(wrapper.find('Footer').exists()).toBe(true);
  });

  it('Tests that App does not render a CourseList component when isLoggedIn is false', () => {
    const wrapper = shallow(
			<AppContext.Provider value={context}>
				<App />
			</AppContext.Provider>
		);
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
		);
    expect(wrapper.find('Login').exists()).toBe(false);
  });


  it('verifies that the default state for displayDrawer is false', () => {
    const wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider>
		);
    expect(wrapper.find('App').props().displayDrawer).toBe(false);
  });

  // it('verifies that after calling login, the state is updated correctly', () => {
  //   render(
  //     <AppContext.Provider value={{ user: { isLoggedIn: false, email: 'test@example.com' }, login: jest.fn() }}>
  //       <App />
  //     </AppContext.Provider>
  //   );
  //   act(() => {
  //     fireEvent.click(screen.getByTestId('Login'));
  //   });
  //   // const login = jest.fn(wrapper.find('App').state(), 'login');
  //   // wrapper.find('App').invoke('login')('me@email.com', '123');
  //   // wrapper.find('App').props().login('me@email.com', '123')
  //   // wrapper.update();
  //   // console.log(wrapper.find('App').props().login);
  //   expect(wrapper.find('App').state().user.isLoggedIn).toBe(true);
  //   // expect(login).toHaveBeenCalled();
  // });

  it('verifies that after calling logOut, the state is updated to false', () => {
    // store.dispatch({ type: 'LOGIN_SUCCESS' });
    // console.log(store.getState()._root.entries);
    const wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider>
		);
    // console.log(wrapper.find('App').props());
    // wrapper.find('App').setState({user: {isLoggedIn: 'true'}});
    // console.log(wrapper.find('App').state());
    wrapper.find('App').invoke('logOut')();
    // console.log(wrapper.find('App').state());
    expect(wrapper.find('App').state().user.isLoggedIn).toBe(false);
  });

  it('verifies that markNotificationAsRead removes the notification correctly', () => {
    const wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider>
		);
    // console.log(wrapper.find('App').props());
    wrapper.find('Notifications').invoke('markNotificationAsRead')(1);
    expect(wrapper.find('Notifications').props().listNotifications.length).toBe(2);
  });

  it('verify that mapStateToProps returns the right object', () => {
    let state = fromJS({
      isUserLoggedIn: true
    });
    const result = mapStateToProps(state);
    expect(result).toEqual({isLoggedIn: true});
  });
});
