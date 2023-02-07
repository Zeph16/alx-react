import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import CourseList from "./CourseList";

describe("Testing CourseList component", () => {
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 40},
    {id: 3, name: 'React', credit: 40}
  ]
  it("renders without crashing", () => {
    expect(shallow(<CourseList />)).to.exist
  })
  it("renders 5 rows", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses}/>)
    const element = wrapper.find("CourseListRow")

    expect(element).to.have.lengthOf(5)
  })
})

