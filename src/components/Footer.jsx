import React from 'react'
import FormattedMessage from './FormattedMessage'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__name">
        <img src={`${process.env.PUBLIC_URL}/LogoDM.svg`} alt="more" />
        <p>Daniele Maggiore</p>
      </div>
      <div className="socials"></div>
      <p>
        <FormattedMessage id="copyright" />
      </p>
    </div>
  );
}

export default Footer