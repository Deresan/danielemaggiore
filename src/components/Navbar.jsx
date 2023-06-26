import React, { useEffect, useState } from 'react';
import FormattedMessage from './FormattedMessage';

const Navbar = () => {
  const [windowW, setWindowW] = useState(window.innerWidth);

  const updateWindowW = () => {
    setWindowW(window.innerWidth);
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
      <div className="navbar__item"><p>
        <FormattedMessage id="navbar.about" />
        </p></div>
      <div className="navbar__item"><p>
        <FormattedMessage id="navbar.works" />
        </p></div>
      <div className="navbar__item"><p>
        <FormattedMessage id="navbar.contacts" />
        </p></div>
    </div>
  );
};

export default Navbar;
