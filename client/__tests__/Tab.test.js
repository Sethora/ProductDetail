import React from 'react';
import { mount } from 'enzyme';
import Tab from '../src/components/tab';

describe('Tab component', () => {
  it('renders', () => {
    const component = mount(<Tab
      value={'Detail'}
      position={0}
      selected={0}
      click={() => console.log('clicked')}
    />);
    expect(component).toMatchSnapshot();
  });
});