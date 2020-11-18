import React from 'react';
import { shallow } from 'enzyme';
import RightArrow from '../src/components/carousel/right-arrow';

describe('Right Arrow', () => {
  test('render the right arrow', () => {
    const wrapper = shallow(<RightArrow
      slide={() => { }}
      height={28}
      width={28}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});