"use client";

import React from 'react';


const Loader = () => (
  <div style={styles.loaderContainer}>
    <PuffLoader color="#6B46C1" size={80} />
  </div>
);

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Optional: Add a background overlay
  },
};

export default Loader;
