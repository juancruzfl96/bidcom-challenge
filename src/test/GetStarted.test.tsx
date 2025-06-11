import React from 'react';
import { render, screen } from '@testing-library/react';
import GetStartedPage from '../pages/get-started';

jest.mock('next/image', () => (props: any) => (
  <img src={props.src} alt={props.alt} />
));
jest.mock('next/link', () => (props: any) => <a href={props.href}>{props.children}</a>);

describe('GetStartedPage', () => {
  it('renders the construction image and back link', () => {
    render(<GetStartedPage />);
    expect(screen.getByAltText('En construcción')).toBeInTheDocument();
    const link = screen.getByRole('link', { name: /Volver al inicio/i });
    expect(link).toHaveAttribute('href', '/');
  });
});