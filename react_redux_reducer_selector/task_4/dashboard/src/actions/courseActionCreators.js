import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes";
import { bindActionCreators } from "redux";

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index: index,
  };
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
};

export const fetchCourseSuccess = (data) => {
  return {
    type: FETCH_COURSE_SUCCESS,
    data: [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ]
  };
}

export const courseActions = {
  selectCourse,
  unSelectCourse,
  fetchCourseSuccess
};

export const boundCourseActions = (dispatch) => bindActionCreators(courseActions, dispatch);
