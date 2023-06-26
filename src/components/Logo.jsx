import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routesCodes } from '../js/routeCodes';
import PropTypes from 'prop-types';

const Logo = ({ scrollbar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const onclick = () => {
    if (location.pathname !== routesCodes.HOME) {
      navigate(routesCodes.HOME);
      return;
    }
    if (scrollbar) {
      scrollbar.scrollTo(0,0, 500);
      return;
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="logo" onClick={onclick}>
      <img src={`${process.env.PUBLIC_URL}/LogoDM.svg`} alt="more" />
    </div>
  );
};

Logo.propTypes = {
  scrollbar: PropTypes.object,
};

export default Logo;
