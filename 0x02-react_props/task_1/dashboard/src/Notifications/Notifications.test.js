import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Notifications from './Notifications.js';

describe("Testing the <Notifications /> Component", () => {
  it("<Notifications /> is rendered without crashing", () => {
    const wrapper = shallow(<Notifications />); 
    expect(wrapper).to.exist;
  });

  it("<Notifications /> renders three list items", () => {
    const wrapper = shallow(<Notifications />); 
    expect(wrapper.find('li')).to.have.lengthOf(3);
  });

  it("<Notifications /> render the text 'Here is the list of notifications'", () => {
    const wrapper = shallow(<Notifications />); 
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
  });

});
