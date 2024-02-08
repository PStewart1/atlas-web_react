import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE} from './uiActionTypes';
import { bindActionCreators } from "redux";
import { useReducer } from "react";


// const [state, dispatch] = useReducer();

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: {email, password}
  }
};

export const logout = () => {
  return {
    type: LOGOUT
  }
};

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  }
};

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  }
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  }
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  }
};

export function loginRequest(email, password) {
  return async function(dispatch) {
    dispatch(login(email, password));
    const response = await fetch('./login-success.json');
    const json = await response.json();
    if (json.status === 'ok') {
      dispatch(loginSuccess());
    }
    else {
      dispatch(loginFailure());
    }
  };
};

export const uiActions = {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest
};

export const boundUIActions = (dispatch) => bindActionCreators(uiActions, dispatch);
