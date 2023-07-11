import React, { useEffect, useState } from 'react';
import FormattedMessage from './FormattedMessage';
import { useDispatch, useSelector } from 'react-redux';
import { setEn, setIt } from '../../js/store/translations';
import PropTypes from 'prop-types';
import { en, it } from '../../assets/img';

const Hamburger = ({ items }) => {
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
        {items.map((item) => (
          <div
            key={item}
            className={`hamburger__menu-item${
              active === item ? ' active' : ''
            }`}
            onClick={() => scrollTo(item)}
          >
            <p>
              <FormattedMessage id={`navbar.${item}`} />
            </p>
          </div>
        ))}

        <div className="hamburger__menu-lang">
          <img src={it} alt="it" onClick={() => dispatch(setIt())} />
          <img src={en} alt="en" onClick={() => dispatch(setEn())} />
        </div>
      </div>
    </>
  );
};

Hamburger.propTypes = {
  items: PropTypes.array,
};

export default Hamburger;
