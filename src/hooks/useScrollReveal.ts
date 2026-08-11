import React, { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to all `.reveal` elements
 * inside the given container ref. When they enter the viewport,
 * `.revealed` is added, triggering the CSS transition.
 */
export function useScrollReveal(containerRef?: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const targets = (containerRef?.current ?? document).querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef]);
}
