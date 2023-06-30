import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { Provider } from 'react-redux';
import store from './js/store/store';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routesCodes } from './js/routeCodes';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import About from './pages/About';
import Projects from './pages/Projects';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
      <Router>
        <Routes>
          <Route path={routesCodes.HOME} element={<Home />} />
          <Route path={routesCodes.ABOUT} element={<About />} />
          <Route path={routesCodes.PROJECTS} element={<Projects />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </GoogleReCaptchaProvider>
    <ToastContainer />
  </Provider>
);
