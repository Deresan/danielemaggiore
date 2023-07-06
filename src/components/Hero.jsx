import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { formatMessage } from '../js/utils';
import FormattedMessage from './FormattedMessage';
import Container from './Container';
import me from '../assets/img/me.webp';
import meSmall from '../assets/img/me-small.webp';

const Hero = () => {
  const lang = useSelector((state) => state.lang.lang);
  const [rotate, setRotate] = useState(0);
  const [imgLoaded, setImageLoaded] = useState(false);
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
    <Container>
      <div className="hero">
        <div className="hero__content">
          <div className="hero__title">
            <p
              className="hero__name fade-from-left"
              style={{ '--delay': '200ms' }}
            >
              Daniele
            </p>
            <p
              className="hero__surname fade-from-left"
              style={{ '--delay': '400ms' }}
            >
              Maggiore
            </p>
            <div className="hero__subtitle">
              {draw && (
                <p
                  className="hero__subtitle-text"
                  style={{
                    '--i': formatMessage(subtitles[rotate], lang).length,
                  }}
                >
                  <FormattedMessage id={subtitles[rotate]} />
                </p>
              )}
              {!draw && (
                <p
                  className="hero__subtitle-text"
                  style={{
                    '--i': formatMessage(subtitles[rotate], lang).length,
                  }}
                >
                  <FormattedMessage id={subtitles[rotate]} />
                </p>
              )}
            </div>
          </div>
          <div className="hero__image">
            <div
              style={{ backgroundImage: `url(${meSmall})` }}
              className={`hero__image-img${imgLoaded ? ' loaded' : ''}`}
            >
              <img
                src={me}
                alt=""
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
