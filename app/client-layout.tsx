"use client";

import { ReactNode } from 'react';
import { DynamicIslandNav } from '@/components/layout/dynamic-island-nav';
import { Footer } from '@/components/layout/footer';
import { CalendlyButton } from '@/components/layout/calendly-button';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DynamicIslandNav />
      {children}
      <Footer />
      <CalendlyButton />
    </>
  );
}
