import React, { useEffect, useState } from 'react';
import FormattedMessage from './FormattedMessage';
import en from '../assets/img/en.png';
import it from '../assets/img/it.png';
import { useDispatch } from 'react-redux';
import { setEn, setIt } from '../js/store/translations';

const Hamburger = () => {
  const dispatch = useDispatch();
  const [windowW, setWindowW] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  const updateWindowW = () => {
    setWindowW(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowW);
    return () => {
      window.removeEventListener('resize', updateWindowW);
    };
  }, [windowW]);

  if (windowW > 767) return null;

  return (
    <>
      <div
        className={`hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <div className="hamburger__burger" />
      </div>
      <div className={`hamburger__menu${open ? ' open' : ''}`}>
        <div className="hamburger__menu-item">
          <p>
            <FormattedMessage id="navbar.about" />
          </p>
        </div>
        <div className="hamburger__menu-item">
          <p>
            <FormattedMessage id="navbar.works" />
          </p>
        </div>
        <div className="hamburger__menu-item">
          <p>
            <FormattedMessage id="navbar.contacts" />
          </p>
        </div>
        <div className="hamburger__menu-lang">
          <img src={it} alt="it" onClick={() => dispatch(setIt())} />
          <img src={en} alt="en" onClick={() => dispatch(setEn())} />
        </div>
      </div>
    </>
  );
};

export default Hamburger;
