import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Header from './Header.js'

describe("Testing header component", () => {
  it("renders without crashing", () => {
    expect(shallow(<Header />)).to.exist;
  });

  it('renders img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).to.have.lengthOf(1);
    expect(wrapper.find('h1')).to.have.lengthOf(1);
  })
})
