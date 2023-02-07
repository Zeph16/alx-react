import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Footer from './Footer.js'

describe('Testing footer component', () => {
  it('renders without crashing', () => {
    expect(shallow(<Footer />)).to.exist;
  });

  it('renders the text Copyright', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text('Copyright')).contain('Copyright');
  })
})
