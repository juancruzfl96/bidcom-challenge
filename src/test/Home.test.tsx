import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

jest.mock('@/components/atoms/IconButton', () => (props: any) => <button {...props}>{props.children}</button>);
jest.mock('@/components/molecules/InfoView', () => (props: any) => <div data-testid="info-view">{JSON.stringify(props.data)}</div>);
jest.mock('@/components/molecules/Carousel', () => (props: any) => <div data-testid="carousel">{props.images?.length}</div>);
jest.mock('@/components/molecules/Sidebar', () => (props: any) => <aside data-testid="sidebar">{props.isOpen ? 'open' : 'closed'}</aside>);
jest.mock('@/components/atoms/Button', () => (props: any) => <a href={props.href}>{props.children}</a>);
jest.mock('next/head', () => (props: any) => <>{props.children}</>);

const mockData = {
  headline: 'Test Headline',
  title: '<b>Test Title</b>',
  description: 'Test Description',
  button: {
    link: '/test-link',
    title: 'Test Button',
  },
};

const mockImages = [
  { image: '/img1.jpg' },
  { image: '/img2.jpg' },
];

describe('Home page', () => {
  it('renders InfoView, Carousel, Sidebar, and Button', () => {
    render(<Home data={mockData} images={mockImages} />);
    expect(screen.getByTestId('info-view')).toBeInTheDocument();
    expect(screen.getByTestId('carousel')).toHaveTextContent('2');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('renders the correct button link', () => {
    render(<Home data={mockData} images={mockImages} />);
    expect(screen.getByText('Test Button').closest('a')).toHaveAttribute('href', '/test-link');
  });
});