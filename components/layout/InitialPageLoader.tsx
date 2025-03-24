// components/layout/InitialPageLoader.tsx
'use client';

import { useEffect, useState } from 'react';
import { Loader } from './loader';
import React from 'react';

export const InitialPageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Loader /> : null;
};
