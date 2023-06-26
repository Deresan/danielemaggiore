import React, { useEffect, useState } from 'react';
import FormattedMessage from './FormattedMessage';
import en from '../assets/img/en.png';
import it from '../assets/img/it.png';
import { useDispatch, useSelector } from 'react-redux';
import { setEn, setIt } from '../js/store/translations';

const Hamburger = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.navigation);
  const [windowW, setWindowW] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  const updateWindowW = () => {
    setWindowW(window.innerWidth);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
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

        <div
          className={`hamburger__menu-item${
            active === 'about' ? ' active' : ''
          }`}
          onClick={() => scrollTo('about')}
        >
          <p>
            <FormattedMessage id="navbar.about" />
          </p>
        </div>

        <div
          className={`hamburger__menu-item${
            active === 'skills' ? ' active' : ''
          }`}
          onClick={() => scrollTo('skills')}
        >
          <p>
            <FormattedMessage id="navbar.skills" />
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
