import {MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';
import { bindActionCreators } from "redux";

export const markAsAread  = (index) => {
  return {
    type: MARK_AS_READ,
    index
  }
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter
  }
};

export const fetchNotificationsSuccess = () => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: [
      {
        id: 1,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available"
      }
    ]
  }
}

export const notificationActions = {
  markAsAread,
  setNotificationFilter,
  fetchNotificationsSuccess
};

export const boundNotificationActions = (dispatch) => bindActionCreators(notificationActions, dispatch);
