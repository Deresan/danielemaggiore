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
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

const Home = () => {
  const [scrollbar, setScrollbar] = useState(null);
  const items = ['about', 'skills', 'contacts'];
  return (
    <>
      <Logo scrollbar={scrollbar} />
      <Hamburger items={items} />
      <Navbar scrollbar={scrollbar} items={items} />
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
          <Container className="contacts">
            <Contacts />
          </Container>
          <Footer />
        </>
      </SmoothScroll>
    </>
  );
};

export default Home;
