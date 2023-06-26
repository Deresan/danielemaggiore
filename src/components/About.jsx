import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatMessage } from '../js/utils';
import FormattedMessage from './FormattedMessage';
import Intersector from './Intersector';
import { useInView } from 'react-intersection-observer';
import { setNav } from '../js/store/navigation';
import aboutMe from '../assets/img/aboutMe.jpg';

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
    <div ref={ref} className="about__content" id="about">
      <Intersector delay="200ms">
        <p className="about__content-title">
          <FormattedMessage id="navbar.about" />
        </p>
      </Intersector>
      <div className="about__content-text">
        <Intersector delay="400ms">
          <img src={aboutMe} alt="photo"></img>
        </Intersector>
        <div>
          <Intersector delay="600ms">
            <p
              dangerouslySetInnerHTML={{
                __html: formatMessage('about', lang),
              }}
            />
          </Intersector>
        </div>
      </div>
      <Intersector delay="800ms">
        <div className="about__content-button">
          <button type="button">
            <FormattedMessage id='more' />
          </button>
        </div>
      </Intersector>
    </div>
  );
};

export default About;
