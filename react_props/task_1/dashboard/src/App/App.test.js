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
 
});