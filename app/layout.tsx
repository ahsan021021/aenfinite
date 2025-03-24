// ✅ Add this at the top
"use client";

import './globals.css';
import React, { useState, useEffect, ReactNode } from 'react';
import { DynamicIslandNav } from '@/components/layout/dynamic-island-nav';
import { Footer } from '@/components/layout/footer';
import { CalendlyButton } from '@/components/layout/calendly-button';
import Loader from '@/components/layout/loader';


export default function RootLayout({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {isLoading && <Loader />}
        <DynamicIslandNav />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
        <CalendlyButton />
      </body>
    </html>
  );
}
