import React from 'react';
import HeaderPage from './HeaderPage';
import FooterPage from './FooterPage';

const FullLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between select-none">
      <HeaderPage />
      <div className="flex w-full h-full">{children}</div>
      <FooterPage />
    </div>
  );
};

export default FullLayout;
