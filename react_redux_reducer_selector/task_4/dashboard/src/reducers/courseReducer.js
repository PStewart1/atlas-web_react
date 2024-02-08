import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE} from '../actions/courseActionTypes';
import { Map, merge } from 'immutable';
import {coursesNormalizer } from '../schema/courses'

export const initialState = Map({});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return coursesNormalizer(action.data.map((course) => (
        merge(course, { isSelected: false })
        )));
    case SELECT_COURSE:
      return Map(state).setIn([action.courseId, 'isSelected'], true);
    case UNSELECT_COURSE:
      return Map(state).setIn([action.courseId, 'isSelected'], false);
    default:
      return state;
  };
};

export default courseReducer;
