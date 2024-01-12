import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("CourseList", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  // 3 CourseListRows rendered with empty course list passed
  it("renders three CourseListRow components with empty course list", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("CourseListRow").length).toBe(3);
  });
  it('Verifies that 4 CourseListRows rendered correctly with 2 courses passed', () => {
    const listCourses = [
      { id: 1, name: 'Course 1', credit: 1 },
      { id: 2, name: 'Course 2', credit: 2 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find('CourseListRow').length).toBe(4);
    expect(wrapper.find('CourseListRow').get(2).props.textFirstCell).toBe(
      'Course 1'
    );
    expect(wrapper.find('CourseListRow').get(3).props.textSecondCell).toBe(2);
  });


});
