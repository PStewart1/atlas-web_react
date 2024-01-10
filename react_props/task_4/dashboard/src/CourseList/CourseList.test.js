import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('<CourseList />', () => {
  it('renders an <CourseList /> component without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper).toHaveLength(1);
  });
  it('renders an <CourseList /> component checking for CourseListRow', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(5);
  });
}
);