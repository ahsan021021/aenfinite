"use client";

import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loader = () => (
  <div style={styles.loaderContainer}>
    <PuffLoader color="#000" size={60} />
  </div>
);

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff',
    zIndex: 9999,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
  },
};

// ✅ Make sure it's exported like this:
export default Loader;
// ✅ Add this at the top
// "use client";    
//