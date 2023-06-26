import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const Intersector = ({ children, delay }) => {
  const [viewed, setViewed] = useState(false);
  const { ref, inView } = useInView({
    threshold: viewed ? 0 : 1,
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
};

export default Intersector;
