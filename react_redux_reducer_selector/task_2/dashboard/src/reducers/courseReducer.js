import {SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS} from '../actions/courseActionTypes';
// import {Map} from 'immutable';

export const initialState = [];

export function courseReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            return action.data.map(course => ({...course, isSelected: false}));
        case SELECT_COURSE:
            return state.map(course => {
                if (course.id === action.courseId) return {...course, isSelected: true};
                    return course;
            });
        case UNSELECT_COURSE:
            return state.map(course => {
                if (course.id === action.courseId) return {...course, isSelected: false};
                    return course;
            });
        default:
            return state;
    }
};
