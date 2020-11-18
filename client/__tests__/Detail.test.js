import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import Detail from '../src/components/detail';

afterEach(cleanup);

describe('Detail component', () => {
  it('renders', () => {
    const { asFragment } = render(<Detail title="Noe you see me" text="Now you don't" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('inserts text in span', () => {
    const { getByTestId, getByText } = render(<Detail title="Help Desk" text="On lunch" />);

    expect(getByTestId('spantag')).toHaveTextContent('Help Desk');
    expect(getByText('On lunch')).toHaveClass('fan');
  });
});