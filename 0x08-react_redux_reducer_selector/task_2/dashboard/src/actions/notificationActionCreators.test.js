import { markAsRead, setNotificationFilter } from "./notificationActionCreators";
import { NotificationTypeFilters, MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

describe("tests for notification actions", () => {
  it("returns the correct mark as read action", () => {
    expect(markAsRead(1)).toEqual({ type: MARK_AS_READ, index: 1 });
  });

  it("returns the correct set notification filter action", () => {
    expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({
      type: SET_TYPE_FILTER,
      filter: "DEFAULT",
    });
  });
});
