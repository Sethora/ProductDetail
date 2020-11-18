import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/containers/app';
import Shipping from '../src/components/shipping';
import GlobalFonts from '../src/assets/fonts/fonts';
import Preview from '../src/containers/preview';
import Tabs from '../src/components/tabs';

describe('App', () => {
  let wrapper;
  console.log(shallow)
  beforeAll((done) => {
    wrapper = shallow(<App />);
    done();
  });

  test('should render correctly', () => expect(wrapper).toMatchSnapshot());
  test('should contain Shipping tag', () => expect(wrapper.contains(<Shipping />)).toBe(true));
  test('should contain the global fonts', () => expect(wrapper.contains(<GlobalFonts />)).toBe(true));
  test('should contain the Preview component', () => expect(wrapper.contains(<Preview product={{}} />)).toBe(true));
  test('should contain the Tabs component', () => expect(wrapper.contains(<Tabs tabs={[]} />)).toBe(true));
});
