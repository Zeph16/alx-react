import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  }
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  }
}

export function boundSelectCourse(index) {
  dispatch(selectCourse(index));
}
export function boundUnSelectCourse(index) {
  dispatch(unSelectCourse(index));
}
