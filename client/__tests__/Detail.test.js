import React from 'react';
import { mount } from 'enzyme';
import Detail from '../src/components/detail';

describe('Detail component', () => {
  it('renders', () => {
    const component = mount(<Detail title="Noe you see me" text="Now you don't" />);
    expect(component).toMatchSnapshot();
  });
});