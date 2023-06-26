import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  return (
    <div className={`container${className ? ` ${className}` : ''}`}>
      <div className="container__content">{children}</div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
