import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes"

export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter
  };
}

export function fetchNotificationsSuccess(notifs) {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: notifs
  }
}

export function boundMarkAsRead(index) {
  dispatch(markAsRead(index));
}
export function boundSetNotificationFilter(filter) {
  dispatch(setNotificationFilter(filter));
}
export function boundFetchNotificationsSuccess(filter) {
  dispatch(fetchNotificationsSuccess(filter));
}
