import Notifications from './Notifications';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  // it('renders three list items', () => {
  //   const wrapper = shallow(<Notifications />);
  //   expect(wrapper.find('li').length).toEqual(3);
  // });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications p').text()).toEqual(
      'Here is the list of notifications'
    );
  });

  it('renders first element', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem').first().html()).toBe(
      '<li data-priority="default">New course available</li>'
    );
  });
});