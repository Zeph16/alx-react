import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Test App.js', () => {
  it('App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
});
