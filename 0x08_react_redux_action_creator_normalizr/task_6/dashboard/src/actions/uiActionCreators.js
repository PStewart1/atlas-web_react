import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} from './uiActionTypes';
import { bindActionCreators } from "redux";

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

export const uiActions = {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export const boundUIActions = (dispatch) => bindActionCreators(uiActions, dispatch);
