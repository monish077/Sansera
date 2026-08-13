import React from 'react';

interface SanseraLogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'dark' | 'light' | 'white' | 'monochrome';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SanseraLogo: React.FC<SanseraLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeMap = {
    sm: 'h-[36px]',
    md: 'h-[50px]',
    lg: 'h-[64px]',
    xl: 'h-[80px]',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/images/Logo.png"
        alt="Sansera"
        className={`${sizeMap[size]} w-auto object-contain`}
      />
    </div>
  );
};