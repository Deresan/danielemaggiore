import React, { useEffect, useState } from 'react';
import Scrollbar from 'smooth-scrollbar';
import PropTypes from 'prop-types';

const options = {
  damping: 0.05,
};

const SmoothScroll = ({ children }) => {
  const [windowW, setWindowW] = useState(window.innerWidth);

  const updateWindowW = () => {
    setWindowW(window.innerWidth);
  }

  useEffect(() => {
    if (windowW > 767) {
      Scrollbar.init(document.getElementById('page'), options);
    }
    window.addEventListener('resize', updateWindowW);
    return () => {
      if (Scrollbar) Scrollbar.destroy(document.getElementById('page'));
      window.removeEventListener('resize', updateWindowW);
    };
  }, [windowW]);
  return <div id="page">{children}</div>;
};

SmoothScroll.propTypes = {
  children: PropTypes.node,
};

export default SmoothScroll;
