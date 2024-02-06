/**
 * @jest-environment jsdom
 */

import Header from "./Header";
import React from "react";
import { shallow, mount } from "enzyme";
import {StyleSheetTestUtils} from "aphrodite";
import {AppContext} from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

global.window = window;
global.document = window.document;

describe("<Header />", () => {
  const context = { user: { email: "whatever@email.com", password: "password", isLoggedIn: true }, logOut: jest.fn() };

  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders an img and h1 tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("h1").exists()).toBe(true);
  });

  it("mounts the Header component with a default context value,and verifies that the logoutSection is not created", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("#logoutSection").exists()).toBe(false);
  });

  it("mounts the Header component with a user logged in, and verifies that the logoutSection is created", () => {
		const wrapper = mount(
			<AppContext.Provider value={context}>
				<Header />
			</AppContext.Provider>
		)

		expect(wrapper.find('#logoutSection').length).toBe(1);
		// expect(wrapper.find('#logoutSection').exists()).toBe(true);
		// wrapper.unmount();
  });

  it("mounts the Header component with a user logged in and the logOut is linked to a spy. Verify that clicking on the link is calling the spy", () => {
    const spy = jest.spyOn(context, 'logOut');

		const wrapper = mount(
			<AppContext.Provider value={context}>
				<Header />
			</AppContext.Provider>
		)

		wrapper.find('span').simulate('click');
		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledTimes(1);
		wrapper.unmount();
  });
});
