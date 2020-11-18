import React from 'react';
import { shallow } from 'enzyme';
import Preview from '../src/containers/preview';

describe('Preview component', () => {
  test('should render the component', () => {
    const wrapper = shallow(<Preview product={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});