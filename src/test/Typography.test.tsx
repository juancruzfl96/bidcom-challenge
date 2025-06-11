import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Typography from '@/components/atoms/Typography';

describe('Typography', () => {
  it('renders children text', () => {
    render(<Typography>Test Child</Typography>);
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('renders text prop if children is not provided', () => {
    render(<Typography text="Text Prop" />);
    expect(screen.getByText('Text Prop')).toBeInTheDocument();
  });

  it('applies the correct variant class', () => {
    render(<Typography variant="aboutTitle">Variant Test</Typography>);
    const p = screen.getByText('Variant Test');
    expect(p).toHaveClass('text-[14px] leading-[20px] font-normal tracking-[0.3em]');
  });

  it('applies custom className', () => {
    render(<Typography className="custom-class">Class Test</Typography>);
    expect(screen.getByText('Class Test')).toHaveClass('custom-class');
  });

  it('renders dangerouslySetInnerHTML', () => {
    render(
      <Typography dangerouslySetInnerHTML={{ __html: '<span>Danger</span>' }} />
    );
    expect(screen.getByText('Danger')).toBeInTheDocument();
  });
});