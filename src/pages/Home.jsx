import React, { useState } from 'react';
import Hero from '../components/home/Hero';
import SmoothScroll from '../components/global/SmoothScroll';
import About from '../components/home/About';
import Logo from '../components/global/Logo';
import Hamburger from '../components/global/Hamburger';
import Background from '../components/global/Background';
import Navbar from '../components/global/Navbar';
import LanguageSelector from '../components/global/LanguageSelector';
import Skills from '../components/home/Skills';
import Contacts from '../components/home/Contacts';
import Footer from '../components/global/Footer';
import Projects from '../components/home/Projects';

const Home = () => {
  const [scrollbar, setScrollbar] = useState(null);
  const items = ['about', 'skills', 'projects', 'contacts'];
  return (
    <>
      <Logo scrollbar={scrollbar} />
      <Hamburger items={items} />
      <Navbar scrollbar={scrollbar} items={items} />
      <Background bubbles />
      <LanguageSelector />
      <SmoothScroll scrollbar={scrollbar} setScrollbar={setScrollbar}>
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contacts />
          <Footer />
        </>
      </SmoothScroll>
    </>
  );
};

export default Home;
