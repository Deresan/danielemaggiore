import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FormattedMessage from './FormattedMessage';
import PropTypes from 'prop-types';

const Navbar = ({ scrollbar, items }) => {
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
      {items.map((item, idx) => (
        <div
          key={item}
          className={`navbar__item fade-from-top${
            active === item ? ' active' : ''
          }`}
          style={{ '--delay': `${idx + 1}00ms` }}
          onClick={() => scrollTo(item)}
        >
          <p>
            <FormattedMessage id={`navbar.${item}`} />
          </p>
        </div>
      ))}
    </div>
  );
};

Navbar.propTypes = {
  scrollbar: PropTypes.object,
  items: PropTypes.array,
};

export default Navbar;
