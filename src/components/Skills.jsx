import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { setNav } from '../js/store/navigation';
import FormattedMessage from './FormattedMessage';
import Intersector from './Intersector';

const Skills = () => {
  const active = useSelector((state) => state.navigation.active);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const skills = [
    'HTML',
    'CSS',
    'SCSS',
    'Figma',
    'JavaScript',
    'TypeScript',
    'ReactJS',
    'VueJs',
    'Angular',
    'Twig',
    'Python',
    'Python-Flask',
    'MySQL',
    'Flutter',
  ];

  useEffect(() => {
    if (inView && active !== 'skills') {
      dispatch(setNav('skills'));
    } else if (!inView && active === 'skills') {
      dispatch(setNav(null));
    }
  }, [inView, active, dispatch]);

  return (
    <div ref={ref} className="skills__content" id="skills">
      <p className="skills__content-title">
        <FormattedMessage id="navbar.skills" />
      </p>
      {skills.map((skill, idx) => (
        <Intersector key='skill' delay={`${idx*100}ms`}>
          <p className="skills__content-skill">{skill}</p>
        </Intersector>
      ))}
    </div>
  );
};

export default Skills;
