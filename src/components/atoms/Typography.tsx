import React, { ReactNode } from 'react';

interface TypographyProps {
  text?: string;
  className?: string;
  children?: ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
  variant?: keyof typeof variants;
}

const variants = {
  aboutTitle: 'text-[14px] leading-[20px] font-normal tracking-[0.3em]',
helloTitle: 'text-[32px] md:text-5xl',
  description: 'text-[16px] leading-[24px] font-light text-[#141414] my-6',
};

const Typography: React.FC<TypographyProps> = ({
  text,
  className = '',
  children,
  dangerouslySetInnerHTML,
  variant,
}) => {
  const variantStyles = variant ? variants[variant] : '';
  return (
    <p
      className={`${variantStyles} ${className}`}
      {...(dangerouslySetInnerHTML
        ? { dangerouslySetInnerHTML }
        : { children: children ?? text })}
    />
  );
};

export default Typography;
