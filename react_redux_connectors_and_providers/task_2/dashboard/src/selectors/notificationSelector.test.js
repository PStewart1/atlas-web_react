import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { initialState, notificationReducer } from '../reducers/notificationReducer';

describe('notificationSelector', () => {
  it('filterTypeSelected', () => {
    const state = { filter: 'DEFAULT' };
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('getNotifications', () => {
    const state = { notifications: initialState };
    expect(getNotifications(state)).toEqual(notificationReducer(undefined, {}));
  });

  it('getUnreadNotifications', () => {
    const state = { notifications: initialState };
    expect(getUnreadNotifications(state)).toEqual(
      notificationReducer(undefined, {}).filter((notification) => !notification.isRead)
    );
  });
});
