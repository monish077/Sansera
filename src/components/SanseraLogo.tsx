import React from 'react';

interface SanseraLogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'dark' | 'light' | 'white' | 'monochrome';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SanseraLogo: React.FC<SanseraLogoProps> = ({
  className = '',
  showTagline = true,
  variant = 'dark',
  size = 'md',
}) => {
  const sizeMap = {
    sm: { height: '26px', logoSize: 'text-xl', tagSize: 'text-[9px]' },
    md: { height: '36px', logoSize: 'text-2xl', tagSize: 'text-[11px]' },
    lg: { height: '48px', logoSize: 'text-3xl', tagSize: 'text-[13px]' },
    xl: { height: '60px', logoSize: 'text-4xl', tagSize: 'text-[15px]' },
  };

  const currentSize = sizeMap[size];

  // Brand colors matching the official Sansera visual identity
  // Primary Blue: #0088cc / #00a0e9, Tagline Charcoal: #55585d or white in dark mode
  const isDarkCanvas = variant === 'dark' || variant === 'white';

  return (
    <div className={`inline-flex flex-col select-none items-start ${className}`}>
      {/* SVG Precision Logo representation */}
      <div className="flex items-center gap-1">
        <svg
          viewBox="0 0 260 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: currentSize.height, width: 'auto' }}
          className="overflow-visible"
        >
          <defs>
            <linearGradient id="sanseraBlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0077b6" />
              <stop offset="50%" stopColor="#0096c7" />
              <stop offset="100%" stopColor="#00b4d8" />
            </linearGradient>
            <filter id="logoGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#00b4d8" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* S */}
          <path
            d="M8 36 C18 39 30 39 36 33 C40 29 38 23 26 20 C10 16 6 12 10 6 C14 0 28 -2 40 2 L38 8 C28 5 18 5 14 9 C11 12 13 16 22 18 C38 22 44 27 40 35 C35 43 20 45 6 42 Z"
            fill="url(#sanseraBlueGrad)"
            transform="skewX(-14)"
          />
          {/* A */}
          <path
            d="M50 42 L66 4 L76 4 L88 42 L78 42 L75 33 L60 33 L58 42 Z M62 26 L73 26 L69 13 Z"
            fill="url(#sanseraBlueGrad)"
            transform="skewX(-14)"
          />
          {/* N */}
          <path
            d="M94 42 L94 4 L104 4 L120 28 L120 4 L130 4 L130 42 L120 42 L104 18 L104 42 Z"
            fill="url(#sanseraBlueGrad)"
            transform="skewX(-14)"
          />
          {/* S */}
          <path
            d="M138 36 C148 39 160 39 166 33 C170 29 168 23 156 20 C140 16 136 12 140 6 C144 0 158 -2 170 2 L168 8 C158 5 148 5 144 9 C141 12 143 16 152 18 C168 22 174 27 170 35 C165 43 150 45 136 42 Z"
            fill="url(#sanseraBlueGrad)"
            transform="skewX(-14)"
          />
          {/* E */}
          <path
            d="M178 42 L178 4 L212 4 L212 11 L188 11 L188 20 L208 20 L208 27 L188 27 L188 35 L214 35 L214 42 Z"
            fill="url(#sanseraBlueGrad)"
            transform="skewX(-14)"
          />
          {/* R */}
          <path
            d="M218 42 L218 4 L240 4 C252 4 258 10 258 18 C258 24 252 29 242 30 L258 42 L246 42 L232 31 L228 31 L228 42 Z M228 24 L238 24 C244 24 248 22 248 18 C248 13 244 11 238 11 L228 11 Z"
            fill="url(#sanseraBlueGrad)"
            transform="skewX(-14)"
          />
          {/* A */}
          <path
            d="M262 42 L278 4 L288 4 L300 42 L290 42 L287 33 L272 33 L270 42 Z M274 26 L285 26 L281 13 Z"
            fill="url(#sanseraBlueGrad)"
            transform="skewX(-14)"
          />
        </svg>
      </div>

      {/* Sub-tagline: ideas@work with styled cyan 'i' */}
      {showTagline && (
        <div
          className={`flex items-center tracking-tight font-medium italic mt-[-2px] self-end mr-1 ${
            isDarkCanvas ? 'text-slate-300' : 'text-slate-700'
          }`}
          style={{ fontSize: '11px', letterSpacing: '0.02em' }}
        >
          <span className="text-[#00b4d8] font-bold not-italic mr-[1px]">i</span>
          <span className={`font-semibold ${isDarkCanvas ? 'text-slate-300' : 'text-slate-800'}`}>deas</span>
          <span className={isDarkCanvas ? 'text-slate-400' : 'text-slate-500'}>@</span>
          <span className={`font-semibold ${isDarkCanvas ? 'text-slate-300' : 'text-slate-800'}`}>work</span>
        </div>
      )}
    </div>
  );
};
