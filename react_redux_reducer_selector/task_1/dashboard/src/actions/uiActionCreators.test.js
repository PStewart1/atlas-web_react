import {login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest, loginSuccess, loginFailure} from './uiActionCreators';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock';

const middleware = [thunk]
const mockStore = configureStore(middleware)

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

  it('returns the correct action for loginSucces', () => {
    const expectedAction = {
      type: 'LOGIN_SUCCESS',
    };
    expect(loginSuccess()).toEqual(expectedAction);
  });

  it('returns the correct action for loignFailure', () => {
    const expectedAction = {
      type: 'LOGIN_FAILURE',
    };
    expect(loginFailure()).toEqual(expectedAction);
  });
});

describe('loginRequest', () => {
  let dispatch;
  beforeEach(() => {
    dispatch = jest.fn();
  });
  afterEach(() => {
    fetchMock.restore();
  });
  const email = 'me@email.com';
  const password = 'password';

  it('dispatches LOGIN_SUCCESS when the json status is ok', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ status: 'ok' }),
    });
    await loginRequest()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOGIN_SUCCESS',
    });
  });

  it('dispatches LOGIN_FAILURE when the json status is not ok', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ status: 'not ok' }),
    });
    await loginRequest()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOGIN_FAILURE',
    });
  });

  it('dispatches loginSuccess when login is successful', async () => {
    fetchMock.getOnce('./login-success.json', { body: { status: 'ok' } });
    const store = mockStore({});
    const expectedActions = [
      login(email, password),
      loginSuccess()
    ];
    await store.dispatch(loginRequest(email, password));
    expect(store.getActions()).toEqual(expectedActions);
  });

it('dispatches loginFailure when login fails', async () => {
    fetchMock.getOnce('./login-success.json', { body: { status: 'error' } });
    const store = mockStore({});
    const expectedActions = [
      login(email, password),
      loginFailure()
    ];
    await store.dispatch(loginRequest(email, password));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
