import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loading = () => (
  <div style={styles.loaderContainer}>
    <PuffLoader color="#00BFFF" size={100} />
  </div>
);

const styles = {
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};

export default Loading;
