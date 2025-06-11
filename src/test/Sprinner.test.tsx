import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spinner from '../components/atoms/Spinner';

describe('Spinner', () => {
  it('renders the spinner div', () => {
    const { container } = render(<Spinner />);
    const spinnerDiv = container.querySelector('.animate-spin');
    expect(spinnerDiv).toBeInTheDocument();
    expect(spinnerDiv).toHaveClass('rounded-full', 'h-12', 'w-12', 'border-t-4', 'border-blue-500', 'border-solid');
  });
});