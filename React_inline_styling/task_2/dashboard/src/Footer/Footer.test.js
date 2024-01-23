import Footer from './Footer';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Footer />', () => {
  it('Tests that Footer renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });
  // Verify that the components renders the word "Copyright"
  it('Tests that Footer renders the word "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').text()).toContain('Copyright');
  });

});