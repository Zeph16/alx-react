import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem.js'

describe('Testing Notification Item component', () => {
  it('renders without crashing', () => {
    expect(shallow(<NotificationItem />)).to.exist;
  })
  it('renders the correct html for props type and value', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />)
    const listItem = wrapper.find("li")
    expect(listItem).to.have.lengthOf(1)
    expect(listItem.text()).to.equal("test")
    expect(listItem.prop("data-notification-type")).to.equal("default")
  })
  it('renders the correct html for prop html', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />)
    const listItem = wrapper.find("li")
    expect(listItem).to.have.lengthOf(1)
    expect(listItem.html()).to.equal("<li data-notification-type=\"default\"><u>test</u></li>")
  })
  it('calls console.log on click', () => {
    const wrapper = shallow(<NotificationItem />)
    const spy = jest.fn()
    wrapper.setProps({ value: "Testing", markAsRead: spy, id: 1 })
    wrapper.find('li').props().onClick()
    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith(1)
    spy.mockRestore()
  })
})

