import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Tab from '../src/components/tab';

afterEach(cleanup);

describe('Tab component', () => {
  it('renders', () => {
    const { asFragment } = render(<Tab
      value={'Detail'}
      position={0}
      selected={0}
      click={() => console.log('clicked')}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('gets the title from props', () => {
    const { getByRole } = render(<Tab
      value={'Detail'}
      position={0}
      selected={0}
      click={() => console.log('clicked')}
    />);
    expect(getByRole('title')).toHaveTextContent('Detail');
  });

  it('should have a click event', () => {
    let count = 0;
    const { getByTestId } = render(<Tab
      value={'Detail'}
      position={0}
      selected={0}
      click={() => count++}
    />);
    const TabStyles = getByTestId('tabstyles');
    fireEvent.click(TabStyles);
    expect(count).toBe(1);
  });
});