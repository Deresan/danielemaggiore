import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FormattedMessage from './FormattedMessage';
import PropTypes from 'prop-types';

const Navbar = ({ scrollbar }) => {
  const { active } = useSelector((state) => state.navigation);
  const [windowW, setWindowW] = useState(window.innerWidth);

  const updateWindowW = () => {
    setWindowW(window.innerWidth);
  };

  const scrollTo = (id) => {
    if (!document.getElementById(id)) return;
    if (scrollbar) {
      scrollbar.scrollIntoView(document.getElementById(id));
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowW);
    return () => {
      window.removeEventListener('resize', updateWindowW);
    };
  }, [windowW]);

  if (windowW <= 767) return null;

  return (
    <div className="navbar">

      <div
        className={`navbar__item fade-from-top${
          active === 'about' ? ' active' : ''
        }`}
        style={{ '--delay': '400ms' }}
        onClick={() => scrollTo('about')}
      >
        <p>
          <FormattedMessage id="navbar.about" />
        </p>
      </div>

      <div
        className={`navbar__item fade-from-top${
          active === 'skills' ? ' active' : ''
        }`}
        style={{ '--delay': '200ms' }}
        onClick={() => scrollTo('skills')}
      >
        <p>
          <FormattedMessage id="navbar.skills" />
        </p>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  scrollbar: PropTypes.object,
};

export default Navbar;
