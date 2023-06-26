import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import SmoothScroll from './components/SmoothScroll';
import Logo from './components/Logo';
import Intersector from './components/Intersector';
import Hamburger from './components/Hamburger';
import Background from './components/Background';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './js/store/store';
import Hero from './components/Hero';
import Container from './components/Container';
import LanguageSelector from './components/LanguageSelector';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Logo />
    <Hamburger />
    <Navbar />
    <Background bubbles />
    <LanguageSelector />
    <SmoothScroll>
      <Container>
        <Hero />
      </Container>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <Intersector delay="1s">
        <h1>ciao</h1>
      </Intersector>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
      <h1>ciao</h1>
    </SmoothScroll>
  </Provider>
);
