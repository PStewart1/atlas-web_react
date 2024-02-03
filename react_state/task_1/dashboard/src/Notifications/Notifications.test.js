import Notifications from './Notifications';
import { shallow } from 'enzyme';
import React from 'react';
import { getLatestNotification } from '../utils/utils';
import {StyleSheetTestUtils} from "aphrodite";

StyleSheetTestUtils.suppressStyleInjection();


describe('notification', () => {

  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ];

  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders NotificationItem component for each element in the list', () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').length).toBe(3);
  });

  it('Notifications renders the text No new notifiction for now when nothing passed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('p').text()).toBe('No new notification for now');
  });

  it('renders first element', () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').first().html()).toContain('New course available');
  });

  it('check that the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('check that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications').exists()).toBe(false);
  });

  it('check that the menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('check that the div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });

  it('verify that CourseList renders correctly if you pass an empty array', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('CourseList').exists()).toBe(false);
  });

  it('verify that when you pass a list of notifications, the component renders it correctly', () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').length).toBe(3);
  });
  
  it('checks that when calling the function markAsRead on an instance of the component, the spy is being called with the right message', () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true} />);
    const instance = wrapper.instance();
    const logSpy = jest.spyOn(instance, 'markAsRead');
    instance.markAsRead(1);
    expect(logSpy).toHaveBeenCalledWith(1);
    logSpy.mockRestore();
  });

  it('verifies that when updating the props of the component with the same list, the component doesnt rerender', () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true} />);
    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      'shouldComponentUpdate'
    );
    wrapper.setProps({ listNotifications: listNotifications });
    expect(shouldComponentUpdate).toHaveReturnedWith(false);
    shouldComponentUpdate.mockRestore();
  });

  it('verifies that when updating the props of the component with a longer list, the component does rerender', () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true} />);
    const shouldComponentUpdate = jest.spyOn(
      Notifications.prototype,
      'shouldComponentUpdate'
    );
    wrapper.setProps({ listNotifications: listNotifications.concat({ id: 4, type: 'default', value: 'New course available' }) });
    expect(shouldComponentUpdate).toHaveReturnedWith(true);
    shouldComponentUpdate.mockRestore();
  });

  it('verifies that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('verifies that clicking on the button calls handleHideDrawer', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true}
      handleHideDrawer={handleHideDrawer} />);
    wrapper.find('img').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });

});
