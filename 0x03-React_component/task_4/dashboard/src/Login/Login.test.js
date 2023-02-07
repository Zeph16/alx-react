import React from 'react'
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Login from './Login.js'

describe('Testing login component', () => {
  it('renders without crashing', () => {
    expect(shallow(<Login />)).to.exist;
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).to.have.lengthOf(2);
    expect(wrapper.find('label')).to.have.lengthOf(2);
  })
})
