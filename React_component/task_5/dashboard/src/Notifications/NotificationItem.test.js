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

  it('checks that when simulating a click on the component, the spy is called with the right ID argument', () => {
    const wrapper = shallow(<NotificationItem value="whatever" markAsRead={(i) => console.log(`test ${i}`)} id={99} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(console, 'log');
    wrapper.find('li').simulate('click');
    expect(spy).toHaveBeenCalledWith('test 99');
    spy.mockRestore();
  });

});
