import {SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS} from '../actions/courseActionTypes';
import {coursesNormalizer} from '../schema/courses';
import { Map, setIn, merge } from 'immutable';

export const initialState = Map([[]]);

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSE_SUCCESS:
        return coursesNormalizer(action.data.map((course) => (
          merge(course, { isSelected: false })
          )));
      case SELECT_COURSE:
        return state.setIn([action.courseId, 'isSelected'], true);
      case UNSELECT_COURSE:
        return state.setIn([action.courseId, 'isSelected'], false);
      default:
        return state;
    };
  };
