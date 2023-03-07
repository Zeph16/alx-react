import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

describe("tests for UI notification action creators", () => {
  it("returns the correct login action", () => {
    const email = "test_email";
    const password = "test_password";

    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: "test_email", password: "test_password" },
    });
  });

  it("returns the correct logout action", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("returns the correct display notification drawer action", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("returns the correct hide notification drawer action", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});
