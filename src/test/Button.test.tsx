import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import Button from '../components/atoms/Button';

test('renders Button component', () => {
  render(<Button href="/test">Click Me</Button>);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders Button children text', () => {
  render(<Button href="/test">Click Me</Button>);
  expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
});

test('renders a link with correct href', () => {
  render(<Button href="/about">About</Button>);
  const link = screen.getByRole('link', { name: /About/i });
  expect(link).toHaveAttribute('href', '/about');
});

test('renders the arrow image', () => {
  render(<Button href="/test">Arrow Test</Button>);
  const img = screen.getByAltText(/Arrow icon/i);
  expect(img).toBeInTheDocument();
});

test('passes extra props to the Link', () => {
  render(
    <Button href="/external" target="_blank" rel="noopener noreferrer">
      External
    </Button>
  );
  const link = screen.getByRole('link', { name: /External/i });
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});
