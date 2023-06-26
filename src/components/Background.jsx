import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Background = ({ bubbles }) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const randomIntFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="background">
      <div className="background__blur" />
      <div className="background__dark" />
      <div className="background__bubbles">
        {bubbles &&
          Array(Math.ceil(dimensions.width / 23))
            .fill(0)
            .map((_, i) => (
              <span key={i} style={{ '--i': randomIntFromInterval(30, 70) }} />
            ))}
      </div>
    </div>
  );
};

Background.propTypes = {
  bubbles: PropTypes.bool,
};

export default Background;
