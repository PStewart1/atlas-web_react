import Header from "./Header";
import React from "react";
import { shallow } from "enzyme";
import {StyleSheetTestUtils} from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();

describe("<Header />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders an img and h1 tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("h1").exists()).toBe(true);
  });
});
