'use client';

import { useEffect } from 'react';

export function usePrefersReducedMotion() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) {
      document.documentElement.dataset.motion = 'reduced';
    }
  }, []);
}
