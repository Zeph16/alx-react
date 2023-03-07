import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

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

export function fetchCourseSuccess(courses) {
  return {
    type: FETCH_COURSE_SUCCESS,
    data: courses
  }
}

export function boundSelectCourse(index) {
  dispatch(selectCourse(index));
}
export function boundUnSelectCourse(index) {
  dispatch(unSelectCourse(index));
}
export function boundFetchCourseSuccess(index) {
  dispatch(fetchCourseSuccess(index));
}
