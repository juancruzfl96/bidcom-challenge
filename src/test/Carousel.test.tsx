import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '../components/molecules/Carousel';

jest.mock('../components/atoms/ImageAtom', () => (props: any) => (
  <img data-testid="image-atom" src={props.src} alt={props.alt} />
));

const images = [
  { image: '/img1.jpg' },
  { image: '/img2.jpg' },
  { image: '/img3.jpg' },
];

describe('Carousel', () => {
  it('renders nothing if images array is empty', () => {
    const { container } = render(<Carousel images={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders a single image if only one image is provided', () => {
    render(<Carousel images={[{ image: '/single.jpg' }]} />);
    const img = screen.getByTestId('image-atom');
    expect(img).toHaveAttribute('src', '/single.jpg');
    expect(img).toHaveAttribute('alt', 'Imagen única');
  });

  it('renders the first image and navigation buttons', () => {
    render(<Carousel images={images} />);
    const img = screen.getByTestId('image-atom');
    expect(img).toHaveAttribute('src', '/img1.jpg');
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });

  it('navigates to the next image when next button is clicked', () => {
    render(<Carousel images={images} />);
    const nextButton = screen.getAllByRole('button')[1];
    fireEvent.click(nextButton);
    expect(screen.getByTestId('image-atom')).toHaveAttribute('src', '/img2.jpg');
  });

  it('navigates to the previous image when prev button is clicked', () => {
    render(<Carousel images={images} />);
    const nextButton = screen.getAllByRole('button')[1];
    const prevButton = screen.getAllByRole('button')[0];
    fireEvent.click(nextButton);
    fireEvent.click(prevButton);
    expect(screen.getByTestId('image-atom')).toHaveAttribute('src', '/img1.jpg');
  });

  it('shows the correct indicator for the current image', () => {
    render(<Carousel images={images} />);
    const dots = screen.getAllByRole('presentation');
    expect(dots[0]).toHaveClass('bg-white');
    expect(dots[1]).toHaveClass('bg-gray-400');
  });
});