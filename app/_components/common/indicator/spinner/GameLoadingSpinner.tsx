import React from 'react';
import Lottie from 'lottie-react';

const GameLoadingSpinner = () => {
  const spinnerURL = 'https://assets10.lottiefiles.com/private_files/lf30_DGRf6G.json';
  return <Lottie animationData={spinnerURL} />;
};

export default GameLoadingSpinner;
