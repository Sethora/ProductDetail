import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../src/components/carousel/outer-carousel';

describe('Outer carousel ', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper).toMatchSnapshot();
  });
});