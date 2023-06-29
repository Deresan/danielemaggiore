import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const Intersector = ({ children, delay, threshold }) => {
  const [viewed, setViewed] = useState(false);
  const { ref, inView } = useInView({
    threshold: viewed ? 0 : threshold,
  });

  useEffect(() => {
    if (inView) setViewed(true);
    else setViewed(false);
  }, [inView, viewed]);

  return (
    <div
      ref={ref}
      className={`intersector${ inView ? ' in-view' : '' }`}
      style={{ '--delay': delay || '0s' }}
    >
      {children}
    </div>
  );
};

Intersector.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.string,
  threshold: PropTypes.number,
};

Intersector.defaultProps = {
  threshold: 1,
};

export default Intersector;
