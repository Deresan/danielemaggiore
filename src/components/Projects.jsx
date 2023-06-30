import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormattedMessage from './FormattedMessage';
import Intersector from './Intersector';
import { useInView } from 'react-intersection-observer';
import { setNav } from '../js/store/navigation';
import Container from './Container';
import elite from '../assets/img/elite.png';
import hackersgen from '../assets/img/hackersgen.png';
import scame from '../assets/img/scame.png';
import catalina from '../assets/img/catalina.png';
import { routesCodes } from '../js/routeCodes';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const active = useSelector((state) => state.navigation.active);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const projects = [
    { url: 'https://www.elite-network.com', src: elite },
    { url: 'https://www.hackersgen.com', src: hackersgen },
    { url: 'https://combiwizard.scame.com/CG02/it', src: scame },
    { url: 'https://www.catalinamarketing.it', src: catalina },
  ];

  useEffect(() => {
    if (inView && active !== 'projects') {
      dispatch(setNav('projects'));
    } else if (!inView && active === 'projects') {
      dispatch(setNav(null));
    }
  }, [inView, active, dispatch]);

  return (
    <Container fRef={ref} className="projects" id="projects">
      <div className="projects__content">
        <Intersector delay="100ms">
          <p className="projects__content-title">
            <FormattedMessage id="navbar.projects" />
          </p>
        </Intersector>
        <div className="projects__content-grid">
          {projects.map((project, idx) => (
            <Intersector key={idx} delay="300ms" threshold={0.3}>
              <a href={project.url} target="_blank">
                <div className="projects__content-item">
                  <img className="projects__content-image" src={project.src} />
                </div>
              </a>
            </Intersector>
          ))}
        </div>
        <Intersector delay="300ms">
          <div className="projects__content-button">
            <button
              type="button"
              onClick={() => navigate(routesCodes.PROJECTS)}
            >
              <FormattedMessage id="more" />
            </button>
          </div>
        </Intersector>
      </div>
    </Container>
  );
};

export default Projects;
