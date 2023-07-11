import React from 'react';
import Logo from '../components/global/Logo';
import Background from '../components/global/Background';
import LanguageSelector from '../components/global/LanguageSelector';
import TimelineContainer from '../components/projects/TimelineContainer';

const Projects = () => {
  return (
    <>
      <Logo />
      <Background bubbles />
      <LanguageSelector />
      <TimelineContainer />
    </>
  );
};

export default Projects;
