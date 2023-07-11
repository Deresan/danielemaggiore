import React, { useState } from 'react';
import Container from '../global/Container';
import Timeline from './Timeline';
import SmoothScroll from '../global/SmoothScroll';
import FormattedMessage from '../global/FormattedMessage';
import Footer from '../global/Footer';
import { projects } from '../../js/entities';

const TimelineContainer = () => {
  const [scrollbar, setScrollbar] = useState(null);

  const [projectList, setProjectList] = useState(projects);

  const changeTab = (id) => {
    setProjectList(
      projectList.map((project) => {
        if (id === project.id) {
          const p = project;
          p.tab = p.tab === 0 ? 1 : 0;
          return p;
        } else return project;
      })
    );
  };

  const setAllTab = (n) => {
    setProjectList(
      projectList.map((project) => {
        if (n !== project.tab) {
          const p = project;
          p.tab = n;
          return p;
        } else return project;
      })
    );
  };
  return (
    <>
      <div className="projects__global-tabs">
        <p onClick={() => setAllTab(0)}>
          <i className="fa-solid fa-envelope-open-text" />
        </p>
        <p onClick={() => setAllTab(1)}>
          <i className="fa-solid fa-square-plus" />
        </p>
      </div>
      <SmoothScroll scrollbar={scrollbar} setScrollbar={setScrollbar}>
        <Container>
          <h1 className="projects__title">
            <FormattedMessage id="navbar.projects" />
          </h1>
          {projectList.map(
            ({ id, date, tab, img, descriptionIt, descriptionEn, skills }) => (
              <Timeline
                key={id}
                date={date}
                tab={tab}
                img={img}
                descriptionIt={descriptionIt}
                descriptionEn={descriptionEn}
                skills={skills}
                changeTab={() => changeTab(id)}
              />
            )
          )}
        </Container>
        <Footer />
      </SmoothScroll>
    </>
  );
};

export default TimelineContainer;
