import App from './App';
import { shallow } from 'enzyme';

describe('App tests', () => {
  test('Runs without crashing', (done) => {
    shallow(<App />);
    done();
  });

  test('Contains App header', (done) => {
    const wrapper = shallow(<App />);
    wrapper.contains(<header className='App-header' />);
    done();
  });

  test('Contains App body', (done) => {
    const wrapper = shallow(<App />);
    wrapper.contains(<header className='App-body' />);
    done();
  });

  test('Contains App footer', (done) => {
    const wrapper = shallow(<App />);
    wrapper.contains(<header className='App-footer' />);
    done();
  });


})
