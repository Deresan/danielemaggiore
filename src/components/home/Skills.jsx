import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { setNav } from '../../js/store/navigation';
import FormattedMessage from '../global/FormattedMessage';
import Intersector from '../global/Intersector';
import Container from '../global/Container';
import { skills } from '../../js/entities';

const Skills = () => {
  const active = useSelector((state) => state.navigation.active);
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

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
