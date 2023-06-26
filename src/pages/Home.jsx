import React, { useState } from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import SmoothScroll from '../components/SmoothScroll';
import About from '../components/About';
import Logo from '../components/Logo';
import Hamburger from '../components/Hamburger';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import LanguageSelector from '../components/LanguageSelector';
import Skills from '../components/Skills';

const Home = () => {
  const [scrollbar, setScrollbar] = useState(null);
  return (
    <>
      <Logo scrollbar={scrollbar} />
      <Hamburger />
      <Navbar scrollbar={scrollbar} />
      <Background bubbles />
      <LanguageSelector />
      <SmoothScroll scrollbar={scrollbar} setScrollbar={setScrollbar}>
        <>
          <Container>
            <Hero />
          </Container>
          <Container className="about">
            <About />
          </Container>
          <Container className="skills">
            <Skills />
          </Container>
        </>
      </SmoothScroll>
    </>
  );
};

export default Home;
