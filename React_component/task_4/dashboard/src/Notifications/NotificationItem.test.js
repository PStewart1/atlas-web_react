import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem.js';
// import '../../config/setupTests.js';

describe('<NotificationItem />', () => {
  it('renders an <NotificationItem /> component', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders with props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.props().dataPriority === 'default');
    expect(wrapper.props().dataValue === 'test');
  });

  it('renders an <NotificationItem /> component checking for html', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.html()).toEqual('<li data-priority="default"><u>test</u></li>');
  });

  // it('Passes a spy as the markAsRead property', () => {
  //   function Read(id) {console.log('test')};
  //   const wrapper = shallow(<NotificationItem value="whatever" markAsRead={Read} id="1" />);
  //   const instance = wrapper.instance();
  //   const spy = jest.spyOn(instance, instance.props.markAsRead);
  //   // instance.forceUpdate();
  //   wrapper.find('li').simulate('click');
  //   // expect(spy).toHaveBeenCalled();
  //   expect(spy).toHaveBeenCalledWith('test');
  //   spy.mockRestore();
  // });

  // it('Check that when simulating a click on the component, the spy is called with the right ID argument', () => {
  //   const wrapper = shallow(<NotificationItem id={1} />);
  //   const instance = wrapper.instance();
  //   const spy = jest.spyOn(console, 'log');
  //   wrapper.find('li').simulate('click');
  //   // expect(spy).toHaveBeenCalled();
  //   expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  //   spy.mockRestore();
  // });

});
