import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow.js';

describe('<CourseListRow />', () => {
  it('renders an <CourseListRow /> component checking for td', () => {
    const wrapper = shallow(React.createElement(CourseListRow, {
      isHeader: true,
      textFirstCell: 'First',
      textSecondCell: 'Second'
    }));
    expect(wrapper.find('th')).toHaveLength(2);
  });
  it('renders an <CourseListRow /> component checking for td', () => {
    const wrapper = shallow(React.createElement(CourseListRow, {
      isHeader: true,
      textFirstCell: 'First'
    }));
    expect(wrapper.find('th')).toHaveLength(1);
  });
  it('renders an <CourseListRow /> component checking for td', () => {
    const wrapper = shallow(React.createElement(CourseListRow, {
      isHeader: false,
    }));
    expect(wrapper.find('tr td')).toHaveLength(2);
  });
});
