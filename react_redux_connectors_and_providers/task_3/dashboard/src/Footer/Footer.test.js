import Footer from './Footer';
import { shallow, mount } from 'enzyme';
import React from 'react';
import {AppContext} from '../App/AppContext';
import chai from 'chai';

chai.use(require('chai-string'));

describe('<Footer />', () => {
  it('Tests that Footer renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Tests that Footer renders the word "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').text()).toContain('Copyright');
  });

  it('verifies that the link is not displayed when the user is not logged in', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('a').exists()).toBe(false);
  });

  it('verifies that the link is displayed when the user is logged in', () => {
    const loginFooter = mount(
      <AppContext.Provider value={{
        user: {
          isLoggedIn: true,
        }
      }}>
        <Footer />
      </AppContext.Provider>
    );
    chai.assert.equal(loginFooter.find('a').length, 1);
    chai.assert.equal(loginFooter.find('a').text(), 'Contact us');
  });
});