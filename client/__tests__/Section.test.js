import React from 'react';
import { shallow } from 'enzyme';
import Section from '../src/components/section';

describe('Section component', () => {
  test('renders the component', () => {
    const wrapper = shallow(<Section selected={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});