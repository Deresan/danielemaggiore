import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatMessage } from '../js/utils';
import FormattedMessage from './FormattedMessage';
import Intersector from './Intersector';
import { useInView } from 'react-intersection-observer';
import { setNav } from '../js/store/navigation';
import aboutMe from '../assets/img/aboutMe.jpg';
import Container from './Container';

const About = () => {
  const lang = useSelector((state) => state.lang.lang);
  const active = useSelector((state) => state.navigation.active);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView && active !== 'about') {
      dispatch(setNav('about'));
    } else if (!inView && active === 'about') {
      dispatch(setNav(null));
    }
  }, [inView, active, dispatch]);

  return (
    <Container fRef={ref} className="about" id="about">
      <div className="about__content">
        <Intersector delay="100ms">
          <p className="about__content-title">
            <FormattedMessage id="navbar.about" />
          </p>
        </Intersector>
        <div className="about__content-text">
          <Intersector delay="200ms" threshold={0.3}>
            <img src={aboutMe} />
          </Intersector>
          <div>
            <Intersector delay="300ms" threshold={0.3}>
              <p
                dangerouslySetInnerHTML={{
                  __html: formatMessage('about', lang),
                }}
              />
            </Intersector>
          </div>
        </div>
        <Intersector delay="400ms">
          <div className="about__content-button">
            <button type="button">
              <FormattedMessage id="more" />
            </button>
          </div>
        </Intersector>
      </div>
    </Container>
  );
};

export default About;
