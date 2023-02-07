import React from 'react';
import { expect } from 'chai'
import { shallow} from 'enzyme';
import App from './App';


describe('Test App.js', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).to.equal(true);
  });
  it("Should contain the Notifications component", () => {
      const wrapper = shallow(<App />);
      wrapper.update();
      expect(wrapper.find("Notifications")).to.have.lengthOf(1);
  });
  it("Should contain the Header component", () => {
      const wrapper = shallow(<App />);
      wrapper.update();
      expect(wrapper.find("Header")).to.have.lengthOf(1);
  });
  it("Should contain the Login component", () => {
      const wrapper = shallow(<App />);
      wrapper.update();
      expect(wrapper.find("Login")).to.have.lengthOf(1);
  });
  it("Should contain the Footer component", () => {
      const wrapper = shallow(<App />);
      wrapper.update();
      expect(wrapper.find("Footer")).to.have.lengthOf(1);
  });
  it("doesn't render CourseList when not logged in", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find("CourseList")).to.have.lengthOf(0)
  })
});

describe('Testing isLoggedIn prop', () => {
  it("renders Login when isLoggedIn", () => {
    const wrapper = shallow(<App isLoggedIn={false} />)
    expect(wrapper.find("Login")).to.exist
  })
  it("renders CourseList when not isLoggedIn", () => {
    const wrapper = shallow(<App isLoggedIn={true} />)
    expect(wrapper.find("CourseList")).to.exist
  })
})
