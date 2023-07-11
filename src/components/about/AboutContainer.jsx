import React, { useState } from 'react';
import Container from '../global/Container';
import FormattedMessage from '../global/FormattedMessage';
import Footer from '../global/Footer';
import SmoothScroll from '../global/SmoothScroll';
import { matrimonio, ecografia, bagnino, star_wars, snorkeling } from '../../assets/img';

const AboutContainer = () => {
  const [tab, setTab] = useState(0);
  const [scrollbar, setScrollbar] = useState(null);
  return (
    <SmoothScroll scrollbar={scrollbar} setScrollbar={setScrollbar}>
      <div className="about-page">
        <Container>
          <h1 className="about-page__title">
            <FormattedMessage id="navbar.about" />
          </h1>
          <div className="about-page__tabs">
            <p
              className={`about-page__tab red${tab === 0 ? ' selected' : ''}`}
              onClick={() => setTab(0)}
            >
              <FormattedMessage id='about.family' />
            </p>
            <p
              className={`about-page__tab blue${tab === 1 ? ' selected' : ''}`}
              onClick={() => setTab(1)}
            >
              <FormattedMessage id='about.hobby' />
            </p>
          </div>
          <div className={`about-page__content ${tab === 0 ? 'red' : 'blue'}`}>
            <div className={`about-page__content-slider${tab===1 ? ' left' : ''}`}>
              <div className={`about-page__content-text`}>
                <p><FormattedMessage id='about.family1' /></p>
                <p><FormattedMessage id='about.family2' /></p>
                <img src={bagnino} />
                <br />
                <br />
                <p><FormattedMessage id='about.family3' /></p>
                <p><FormattedMessage id='about.family4' /></p>
                <img src={matrimonio} />
                <br />
                <br />
                <p><FormattedMessage id='about.family5' /></p>
                <img src={ecografia} />
              </div>
              <div className={`about-page__content-text`}>
                <p><FormattedMessage id='about.hobby1' /></p>
                 <iframe
                 src="https://www.youtube.com/embed/GuyKVOuJ11Y"
                 title="nothing else matters"
                 frameborder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 allowFullScreen
                 ></iframe>
                <br />
                <br />
                <p><FormattedMessage id='about.hobby2' /></p>
                <p>
                  <FormattedMessage id='about.hobby3' />
                  {' '}
                  <a href="https://dnd-on-line.web.app" target='_blank'>https://dnd-on-line.web.app</a>
                </p>
                <p><FormattedMessage id='about.hobby4' /></p>
                <img src={star_wars} />
                <br />
                <br />
                <p><FormattedMessage id='about.hobby5' /></p>
                <p><FormattedMessage id='about.hobby6' /></p>
                <img src={snorkeling} />
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default AboutContainer;
