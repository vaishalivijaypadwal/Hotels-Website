// src/components/Layout.jsx
import React from 'react';
import KinaraFooter from './KinaraFooter';
import FuntasticoFooter from './FuntasticoFooter';
import './Layout.css';

const Layout = ({ children,resort }) => {
  // Determine which footer to show based on resort
  const getFooter = () => {
    switch(resort) {
      case 'kinara':
        return <KinaraFooter />;
      case 'funtastico':
        return <FuntasticoFooter />;
      default:
        return null;
    }
  };

  return (
    <div className="layout">
      <main className="main-content">
        {children}
      </main>
      {getFooter()}
    </div>
  );
};

export default Layout;