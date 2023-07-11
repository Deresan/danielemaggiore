import React from 'react';
import FormattedMessage from './FormattedMessage';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__name">
        <img src={`${process.env.PUBLIC_URL}/LogoDM.svg`} alt="more" />
        <p>Daniele Maggiore</p>
      </div>
      <div className="socials">
        <a href={process.env.REACT_APP_LINKEDIN} target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href={process.env.REACT_APP_GITHUB} target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <p>
        <FormattedMessage id="copyright" />
      </p>
    </div>
  );
};

export default Footer;
