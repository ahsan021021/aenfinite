// loading.js
import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loading = () => (
  <div style={styles.loaderContainer}>
    <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
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
