import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoView from '../components/molecules/InfoView';

const mockData = {
  headline: 'Headline text',
  title: '<b>Title HTML</b>',
  description: 'Description here',
  button: {
    link: '/about',
    title: 'Learn More',
  },
};

describe('InfoView', () => {
  it('renders headline, title, description, and button', () => {
    render(<InfoView data={mockData} />);
    expect(screen.getByText('Headline text')).toBeInTheDocument();
    expect(screen.getByText('Title HTML')).toBeInTheDocument();
    expect(screen.getByText('Description here')).toBeInTheDocument();
    const button = screen.getByRole('link', { name: /Learn More/i });
    expect(button).toHaveAttribute('href', '/about');
  });
});