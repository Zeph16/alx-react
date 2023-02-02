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
    const wrapper = shallow(<Notifications displayDrawer={true}/>); 
    const ulItem = wrapper.find("ul")
    expect(ulItem.children()).to.have.lengthOf(3)
    ulItem.forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it("renders the correct html for the first NotificationItem", () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find("ul").childAt(0).html()).to.equal('<li data-notification-type="default">New course available</li>');
  })

  it("renders the text 'Here is the list of notifications'", () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>); 
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
  });

  it("displays div.menuItem when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />)
    expect(wrapper.text()).to.contain("Your notifications")
  })

  it("doesn't display div.Notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />)
    expect(wrapper.find("div")).to.have.length(1)
  })

  it("displays div.menuItem when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper.text()).to.contain("Your notifications")
  })

  it("displays div.Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper.find("div")).to.have.length(2)
  })

});
