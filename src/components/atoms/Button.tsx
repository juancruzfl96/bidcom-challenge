'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import arrow from '@/../public/arrow.svg';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ children, href, ...props }) => {
  return (
    <div className="w-full">
      <Link
        href={href}
        className="w-full inline-flex items-center justify-center h-[54px] my-4 px-8 rounded-[10px] bg-black text-white gap-2.5 no-underline"
        {...props}
      >
        <span>{children}</span>
        <Image src={arrow} alt="Arrow icon" width={10} />
      </Link>
    </div>
  );
};

export default Button;
