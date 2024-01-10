import Notifications from './Notifications';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('.Notifications p').text()).toEqual(
      'Here is the list of notifications'
    );
  });

  it('renders first element', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('NotificationItem').first().html()).toBe(
      '<li data-priority="default">New course available</li>'
    );
  });

  // it('renders three list items', () => {
  //   const wrapper = shallow(<Notifications />);
  //   expect(wrapper.find('NotificationItem').length).toBe(3);
  // });

  // it('has a close button', () => {
  //   const wrapper = shallow(<Notifications />);
  //   expect(wrapper.find('img').exists()).toBe(true);
  // });

  it('menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('div.Notifications does not display when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications').exists()).toBe(false);
  });

  it('menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('div.Notifications does display when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });
});