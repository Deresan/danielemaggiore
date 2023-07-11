import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className, fRef, id }) => {
  return (
    <div className={`container${className ? ` ${className}` : ''}`} ref={fRef} id={id}>
      <div className="container__content">{children}</div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  fRef: PropTypes.func,
  id: PropTypes.string,
};

export default Container;
