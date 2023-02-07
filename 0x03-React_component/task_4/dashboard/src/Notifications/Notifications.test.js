import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Notifications from './Notifications.js';
import NotificationItem from './NotificationItem.js'; 
import { getLatestNotification } from '../utils/utils.js';

describe("Testing the <Notifications /> Component", () => {
  const listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
  ]
  it("renders without crashing", () => {
    const wrapper = shallow(<Notifications />); 
    expect(wrapper).to.exist;
  });

  it("renders three NotifiationItem elements", () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true}/>); 
    const ulItem = wrapper.find("ul")
    expect(ulItem.children()).to.have.lengthOf(3)
    ulItem.forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
  });

  it("renders the correct html for the first NotificationItem", () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true}/>);
    expect(wrapper.find("ul").childAt(0).html()).to.equal('<li data-notification-type="default">New course available</li>');
  })

  it("renders the text 'Here is the list of notifications'", () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true}/>); 
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
  });

  it("displays div.menuItem when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={false} />)
    expect(wrapper.text()).to.contain("Your notifications")
  })

  it("doesn't display div.Notifications when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={false} />)
    expect(wrapper.find("div")).to.have.length(1)
  })

  it("displays div.menuItem when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true} />)
    expect(wrapper.text()).to.contain("Your notifications")
  })

  it("displays div.Notifications when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true} />)
    expect(wrapper.find("div")).to.have.length(2)
  })

  it('renders correctly without the listNotifications prop', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>)
    expect(wrapper).to.exist
    expect(wrapper.find("p").first().html()).to.equal("<p>No new notification for now</p>")
  })

  it('renders listNotifications prop correctly', () => {
    const wrapper = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true} />)
    expect(wrapper.find(NotificationItem)).to.have.lengthOf(3);
  })

  it('calls console.log in markAsRead function', () => {
    const wrapper = shallow(<Notifications />)
    const spy = jest.spyOn(console, "log").mockImplementation()
    wrapper.instance().markAsRead = spy
    wrapper.instance().markAsRead(1)
    expect(wrapper.instance().markAsRead).toHaveBeenCalledWith(1)
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(1)
    spy.mockRestore()
  })

});
