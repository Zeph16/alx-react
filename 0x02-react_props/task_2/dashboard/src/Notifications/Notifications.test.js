import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Notifications from './Notifications.js';
import NotificationItem from './NotificationItem.js'; 

describe("Testing the <Notifications /> Component", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Notifications />); 
    expect(wrapper).to.exist;
  });

  it("renders three NotifiationItem elements", () => {
    const wrapper = shallow(<Notifications />); 
    const ulItem = wrapper.find("ul")
    expect(ulItem.children()).to.have.lengthOf(3)
    ulItem.forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it("renders the correct html for the first NotificationItem", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul").childAt(0).html()).to.equal('<li data-notification-type="default">New course available</li>');
  })

  it("renders the text 'Here is the list of notifications'", () => {
    const wrapper = shallow(<Notifications />); 
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
  });

});
