import {login, logout, displayNotificationDrawer, hideNotificationDrawer} from './uiActionCreators';

describe('uiActionCreators', () => {
  it('returns the correct action for login', () => {
    const action = login('me@email.com', 'password');
    expect(action).toEqual({ type: 'LOGIN', user: { email: 'me@email.com', password: 'password' } });
  });

  it('returns the correct action for logout', () => {
    const action = logout();
    expect(action).toEqual({ type: 'LOGOUT' });
  });

  it('returns the correct action for displayNotificationDrawer', () => {
    const action = displayNotificationDrawer();
    expect(action).toEqual({ type: 'DISPLAY_NOTIFICATION_DRAWER' });
  });

  it('returns the correct action for hideNotificationDrawer', () => {
    const action = hideNotificationDrawer();
    expect(action).toEqual({ type: 'HIDE_NOTIFICATION_DRAWER' });
  });
});