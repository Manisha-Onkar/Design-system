import React, { useState } from 'react';

export interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  fallback?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-12 h-12 text-base',
  lg: 'w-16 h-16 text-lg',
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'md',
  fallback = '👤',
}) => {
  const [isImageError, setIsImageError] = useState(false);

  const classes = `rounded-full bg-gray-200 flex items-center justify-center overflow-hidden ${sizeClasses[size]}`;

  return (
    <div className={classes} role="img" aria-label={alt}>
      {src && !isImageError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setIsImageError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-gray-600 font-medium">{fallback}</span>
      )}
    </div>
  );
};
