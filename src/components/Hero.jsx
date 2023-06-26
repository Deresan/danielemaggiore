import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { formatMessage } from '../js/utils';
import FormattedMessage from './FormattedMessage';

const Hero = () => {
  const lang = useSelector((state) => state.lang.lang);
  const [rotate, setRotate] = useState(0);
  const [draw, setDraw] = useState(false);
  const subtitles = ['dev', 'uiDesigner', 'pianist'];
  const rotateRef = useRef();
  rotateRef.current = rotate;
  const drawRef = useRef();
  drawRef.current = draw;

  const rotateText = () => {
    setRotate(
      rotateRef.current === subtitles.length - 1 ? 0 : rotateRef.current + 1
    );
    setDraw(!drawRef.current);
  };

  useEffect(() => {
    const interval = setInterval(rotateText, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__title">
          <p className="hero__name">Daniele</p>
          <p className="hero__surname">Maggiore</p>
          <div className="hero__subtitle">
            {draw && (
              <p
                className="hero__subtitle-text"
                style={{ '--i': formatMessage(subtitles[rotate], lang).length }}
              >
                <FormattedMessage id={subtitles[rotate]} />
              </p>
            )}
            {!draw && (
              <p
                className="hero__subtitle-text"
                style={{ '--i': formatMessage(subtitles[rotate], lang).length }}
              >
                <FormattedMessage id={subtitles[rotate]} />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;