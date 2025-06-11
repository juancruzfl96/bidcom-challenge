'use client';

import React, { useState } from 'react';

interface ImageAtomProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const ImageAtom: React.FC<ImageAtomProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  ...props
}) => {
  const [loading, setLoading] = useState(true);

  const customCorners =
    'rounded-tl-[100px] rounded-br-[100px] rounded-tr-[20px] rounded-bl-[20px]';

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/80">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500 border-solid" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${customCorners} w-full h-auto object-cover ${
          loading ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-500`}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setLoading(false)}
        {...props}
      />
    </div>
  );
};

export default ImageAtom;
