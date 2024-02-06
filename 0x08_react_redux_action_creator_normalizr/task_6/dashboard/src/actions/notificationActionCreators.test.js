import {markAsAread, setNotificationFilter} from './notificationActionCreators';
import {MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters} from './notificationActionTypes';

describe('notificationActionCreators', () => {
  it('returns the correct action for markAsAread', () => {
    const action = markAsAread(1);
    expect(action).toEqual({ type: MARK_AS_READ, index: 1 });
  });

  it('returns the correct action for setNotificationFilter', () => {
    const action = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(action).toEqual({ type: SET_TYPE_FILTER, filter: NotificationTypeFilters.DEFAULT });
  });
});