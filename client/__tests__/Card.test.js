import React from 'react';
import { shallow } from 'enzyme';
import Card from '../src/components/carousel/card';

describe('Card', () => {
  test('render the card', () => {
    const wrapper = shallow(<Card
      reference={() => { }}
      cards={[]}
      scroll={() => { }}
      click={() => { }}
      height={70}
      width={70}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});