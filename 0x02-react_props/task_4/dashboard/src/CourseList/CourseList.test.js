import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import CourseList from "./CourseList";

describe("Testing CourseList component", () => {
  it("renders without crashing", () => {
    expect(shallow(<CourseList />)).to.exist
  })
  it("renders 5 rows", () => {
    const wrapper = shallow(<CourseList />)
    const element = wrapper.find("CourseListRow")

    expect(element).to.have.lengthOf(5)
  })
})

