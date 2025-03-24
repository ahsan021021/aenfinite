"use client";

// components/LAYOUT/Layout.js
import React, { Suspense } from 'react';
import Loader from './loader';

const Layout = ({ children }) => (
  <Suspense fallback={<Loader />}>
    {children}
  </Suspense>
);

export default Layout;
