import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IconButton from '@/components/atoms/IconButton';

describe('IconButton', () => {
  test('renders children inside the button', () => {
    render(
      <IconButton>
        <span>Test Icon</span>
      </IconButton>
    );
    expect(screen.getByText('Test Icon')).toBeInTheDocument();
  });

  test('applies base styles and custom className', () => {
    render(
      <IconButton className="custom-class">
        <span>Styled Icon</span>
      </IconButton>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('inline-flex');
    expect(button).toHaveClass('rounded-full');
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<IconButton onClick={handleClick}>Click Me</IconButton>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('supports ref forwarding', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<IconButton ref={ref}>Ref Button</IconButton>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  test('passes other props to the button', () => {
    render(
      <IconButton aria-label="icon-button-test">
        <span>Other Props</span>
      </IconButton>
    );
    const button = screen.getByLabelText('icon-button-test');
    expect(button).toBeInTheDocument();
  });
});
