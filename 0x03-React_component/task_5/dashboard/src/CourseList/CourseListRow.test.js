import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";
import CourseListRow from "./CourseListRow";

describe("Testing CourseListRow component", () => {
  it("renders one cell when textSecondCell doesn't exist", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />)
    const thItem = wrapper.find("th")
    expect(thItem).to.have.lengthOf(1)
    expect(thItem.prop("colSpan")).to.equal("2");
  })
  it("renders two cells when textSecondCell exists", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="first" textSecondCell="second" />)
    const thItem = wrapper.find("th")
    expect(thItem).to.have.lengthOf(2)
  })
  it("renders two cells when isHeader is false", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="first" textSecondCell="second" />)
    const tdItem = wrapper.find("td")
    expect(tdItem).to.have.lengthOf(2)
  })
})
