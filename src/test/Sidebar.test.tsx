import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from '../components/molecules/Sidebar';

describe('Sidebar', () => {
  it('renders the sidebar content when open', () => {
    render(<Sidebar isOpen={true} />);
    expect(screen.getByText('Menú')).toBeInTheDocument();
    expect(screen.getByText('Gracias por revisar mi challenge 👋')).toBeInTheDocument();
    const sidebar = screen.getByRole('complementary', { hidden: true }) || screen.getByText('Menú').parentElement;
    expect(sidebar).toHaveClass('translate-x-0');
    expect(sidebar).toHaveAttribute('aria-hidden', 'false');
  });

  it('hides the sidebar when closed', () => {
    render(<Sidebar isOpen={false} />);
    const sidebar = screen.getByRole('complementary', { hidden: true }) || screen.getByText('Menú').parentElement;
    expect(sidebar).toHaveClass('translate-x-full');
    expect(sidebar).toHaveAttribute('aria-hidden', 'true');
  });
});