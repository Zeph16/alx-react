import { selectCourse, unSelectCourse } from "./courseActionCreators"
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("Testing action creators", () => {
  it("returns the correct action with select course", () => {
    const action = selectCourse(1);
    expect(action).toEqual({
      type: SELECT_COURSE,
      index: 1
    });
  });

  it("returns the correct action with unselect course", () => {
    const action = unSelectCourse(1);
    expect(action).toEqual({
      type: UNSELECT_COURSE,
      index: 1
    });
  });
})
