import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('Testing Notifications component', () => {
  test('Runs without crashing', () => {
    shallow(<Notifications />).exists();
  });

  test('Renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(3); 
  });

  test('Renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toContain("Here is the list of notifications");
  })
})
