import App from './App';
import { shallow } from 'enzyme';
import React from 'react';

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

  // CourseList is not displayed by default
  it('Tests that App does not render CourseList component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList').exists()).toBe(false);
  });

  // When isLoggedIn is true, the Login component should not be displayed
  it('Tests that App renders a Login component', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login').exists()).toBe(false);
  });

  // When isLoggedIn is true, the CourseList component should be displayed
  it('Tests that App renders a CourseList component', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList').exists()).toBe(true);
  });
});