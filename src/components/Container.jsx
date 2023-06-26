import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="container__content">{children}</div>
    </div>
  );
};

export default Container;
