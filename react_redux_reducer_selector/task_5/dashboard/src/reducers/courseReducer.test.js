import courseReducer, { initialState } from "./courseReducer";
import { SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fetchCourseSuccess } from '../actions/courseActionCreators';
import { coursesNormalizer } from "../schema/courses";
import { setIn } from 'immutable';

describe("courseReducer", () => {
  const courses = [
    { id: 1, name: "ES6", credit: 60, isSelected: false },
    { id: 2, name: "Webpack", credit: 20, isSelected: false },
    { id: 3, name: "React", credit: 40, isSelected: false }
  ];

  it("Tests that the default state returns an empty array", () => {
    const expected = courseReducer(undefined, { type: "UNKNOWN" });
    expect(expected).toEqual(initialState);
  });

  it('Tests that FETCH_COURSE_SUCCESS returns the data passed', () => {
    const expected = courseReducer(initialState, fetchCourseSuccess());
    expect(expected).toEqual(coursesNormalizer(courses));
  });

  it('Tests that SELECT_COURSE returns the data with the right item updated', () => {
    const expected = courseReducer(initialState, { type: SELECT_COURSE, courseId: 1 });
    expect(expected).toEqual(setIn(initialState, [1, 'isSelected'], true));
  });

  it('Tests that UNSELECT_COURSE returns the data with the right item updated', () => {
    const expected = courseReducer(initialState, { type: UNSELECT_COURSE, courseId: 1 });
    expect(expected).toEqual(setIn(initialState, [1, 'isSelected'], false));
  });
});
