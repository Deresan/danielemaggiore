import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { setNav } from '../js/store/navigation';
import FormattedMessage from './FormattedMessage';
import Intersector from './Intersector';
import Container from './Container';

const Skills = () => {
  const active = useSelector((state) => state.navigation.active);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const skills = [
    { name: 'HTML', icon: 'fa-brands fa-html5' },
    { name: 'CSS', icon: 'fa-brands fa-css3' },
    { name: 'SCSS', icon: 'fa-brands fa-sass' },
    { name: 'Figma', icon: 'fa-brands fa-figma' },
    { name: 'JavaScript', icon: 'fa-brands fa-js' },
    { name: 'TypeScript', icon: 'fa-brands fa-ts' },
    { name: 'ReactJS', icon: 'fa-brands fa-react' },
    { name: 'VueJs', icon: 'fa-brands fa-vuejs' },
    { name: 'Angular', icon: 'fa-brands fa-angular' },
    { name: 'Twig', icon: '' },
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'Python-Flask', icon: '' },
    { name: 'MySQL', icon: '' },
    { name: 'Flutter', icon: '' },
  ];

  useEffect(() => {
    if (inView && active !== 'skills') {
      dispatch(setNav('skills'));
    } else if (!inView && active === 'skills') {
      dispatch(setNav(null));
    }
  }, [inView, active, dispatch]);

  return (
    <Container fRef={ref} className="skills" id="skills">
      <div className="skills__content">
        <p className="skills__content-title">
          <FormattedMessage id="navbar.skills" />
        </p>
        {skills.map((skill, idx) => (
          <Intersector key={skill.name} delay={`${idx * 100}ms`}>
            <p className="skills__content-skill">
              <span>
                <i className={skill.icon}></i>
                {skill.name}
              </span>
            </p>
          </Intersector>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
