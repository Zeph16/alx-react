import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from "./uiActionTypes";

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password }
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
}

export function boundLogin(email, password) {
  dispatch(login(email, password));
}
export function boundLogout() {
  dispatch(logout());
}
export function boundDisplayNotificationDrawer() {
  dispatch(displayNotificationDrawer());
}
export function boundHideNotificationDrawer() {
  dispatch(hideNotificationDrawer());
}
