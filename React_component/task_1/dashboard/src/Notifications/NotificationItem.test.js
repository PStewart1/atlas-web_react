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

});
