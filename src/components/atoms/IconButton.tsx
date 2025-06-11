import React from 'react';

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const baseStyles =
  'inline-flex items-center justify-center p-2 rounded-full focus:outline-none transition-colors duration-200 hover:bg-gray-200';

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
