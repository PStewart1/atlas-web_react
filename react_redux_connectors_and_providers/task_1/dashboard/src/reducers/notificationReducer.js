import {MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS} from '../actions/notificationActionTypes';
import { fromJS, merge, set, setIn  } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = fromJS({
    notifications: [],
    filter: 'DEFAULT',
});

export function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const notes = action.data.map((notification) => (
                merge(notification, { isRead: false })
            ))
            return fromJS({
                filter: state.get('filter'),
                notifications: notificationsNormalizer(notes),
            });
        case MARK_AS_READ:
            return setIn(state, ['notifications', action.index-1, 'isRead'], true);
        case SET_TYPE_FILTER:
            return set(state, 'filter', action.filter);
        default:
            return state;
    }
};
