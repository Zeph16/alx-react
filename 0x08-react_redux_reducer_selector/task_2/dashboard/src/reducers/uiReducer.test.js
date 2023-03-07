import { toJS } from 'immutable'
import uiReducer, { initialState } from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe("UI reducer tests", () => {
  it('is equal to initialState when undefined is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState);
  })
  it('functions as expected with SELECT_COURSE action type', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state.toJS()).toEqual(initialState);
  })
  it('functions as expected with DISPLAY_NOTIFICATION_DRAWER action type', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true
    });
  })
})
