import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/uiActionTypes';
import {initialState, uiReducer} from '../reducers/uiReducer';

describe('uiReducer', () => {
    it('verifies the state returned by the uiReducer function equals the initial state when no action is passed', () => {
        const state = uiReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    it('verifies the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
        const state = uiReducer(undefined, {type: 'SELECT_COURSE'});
        expect(state).toEqual(initialState);
    });

    it('verifies the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
        const state = uiReducer(undefined, {type: DISPLAY_NOTIFICATION_DRAWER});
        expect(state.isNotificationDrawerVisible).toEqual(true);
    });
});
