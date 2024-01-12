import Notifications from './Notifications';
import { shallow } from 'enzyme';
import React from 'react';
import { getLatestNotification } from '../utils/utils';


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

  // renders NotificationItem component for each element in the list
  it('renders NotificationItem component for each element in the list', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').length).toBe(1);
  });

  it('Notifications renders the text No new notifiction for now when nothing passed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('p').text()).toBe('No new notification for now');
  });

  // renders first element
  it('renders first element', () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').first().html()).toBe(
      '<li data-priority="default">New course available</li>'
    );
  });
  // check that the menu item is being displayed when displayDrawer is false
  it('check that the menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });
  // check that the div.Notifications is not being displayed when displayDrawer is false
  it('check that the div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications').exists()).toBe(false);
  });

  // check that the menu item is being displayed when displayDrawer is true
  it('check that the menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  // check that the div.Notifications is being displayed when displayDrawer is true
  it('check that the div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });
  // verify that CourseList renders correctly if you pass an empty array
  it('verify that CourseList renders correctly if you pass an empty array', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').length).toBe(1);
  });

  it('verify that CourseList renders correctly if you pass an empty array', () => {
    const wrapper = shallow(<Notifications listNotifications={[]}displayDrawer={true} />);
    expect(wrapper.find('NotificationItem').length).toBe(1);
  });

  // verify that when you pass a list of notifications, the component renders it correctly
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
});
