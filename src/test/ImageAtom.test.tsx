import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageAtom from '../components/atoms/ImageAtom';

describe('ImageAtom', () => {
  it('renders the image with correct src and alt', () => {
    render(<ImageAtom src="/test.jpg" alt="Test image" />);
    const img = screen.getByAltText('Test image');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test.jpg');
  });

  it('shows loading spinner initially', () => {
    render(<ImageAtom src="/test.jpg" alt="Test image" />);
    const spinner = screen.getByRole('status', { hidden: true });
    expect(spinner).toBeInTheDocument();
  });

  it('hides spinner after image loads', () => {
    render(<ImageAtom src="/test.jpg" alt="Test image" />);
    const img = screen.getByAltText('Test image');
    fireEvent.load(img);
    expect(
      screen.queryByRole('status', { hidden: true })
    ).not.toBeInTheDocument();
  });

  it('applies custom className to the wrapper', () => {
    render(<ImageAtom src="/test.jpg" alt="Test image" className="custom-class" />);
    const wrapper = screen.getByAltText('Test image').parentElement;
    expect(wrapper).toHaveClass('custom-class');
  });

  it('sets loading attribute based on priority prop', () => {
    const { rerender } = render(<ImageAtom src="/test.jpg" alt="Test image" />);
    let img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'lazy');

    rerender(<ImageAtom src="/test.jpg" alt="Test image" priority />);
    img = screen.getByAltText('Test image');
    expect(img).toHaveAttribute('loading', 'eager');
  });
});