import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { setNav } from '../js/store/navigation';
import FormattedMessage from './FormattedMessage';
import Intersector from './Intersector';
import { emailPattern, formatMessage } from '../js/utils';
import emailjs from '@emailjs/browser';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

const Contacts = () => {
  const active = useSelector((state) => state.navigation.active);
  const lang = useSelector((state) => state.lang.lang);
  const [token, setToken] = useState();
  const [name, setName] = useState({
    value: '',
    touched: false,
  });
  const [email, setEmail] = useState({
    value: '',
    touched: false,
  });
  const [message, setMessage] = useState({
    value: '',
    touched: false,
  });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    message: null,
  });
  const isValid =
    !errors.name &&
    name.touched &&
    !errors.email &&
    email.touched &&
    !errors.message &&
    message.touched;
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  const updateName = (e) => {
    setName({ value: e.target.value, touched: true });
  };
  const updateEmail = (e) => {
    setEmail({ value: e.target.value, touched: true });
  };
  const updateMessage = (e) => {
    setMessage({ value: e.target.value, touched: true });
  };

  const validate = () => {
    const e = {
      name: null,
      email: null,
      message: null,
    };
    if (!emailPattern.test(email.value.trim()) && email.touched)
      e.email = 'error.email';
    if (!email.value.trim() && email.touched) e.email = 'error.required';
    if (!name.value.trim() && name.touched) e.name = 'error.required';
    if (!message.value.trim() && message.touched) e.message = 'error.required';
    setErrors(e);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!isValid || !token) return;
    const templateParams = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          setName({ value: '', touched: false });
          setEmail({ value: '', touched: false });
          setMessage({ value: '', touched: false });
        },
        (error) => {
          console.error('FAILED:', error);
        }
      );
  };

  const recaptcha = (t) => {
    if (!token) setToken(t);
  };

  useEffect(() => {
    validate();
  }, [name, email, message]);

  useEffect(() => {
    if (inView && active !== 'contacts') {
      dispatch(setNav('contacts'));
    } else if (!inView && active === 'contacts') {
      dispatch(setNav(null));
    }
  }, [inView, active, dispatch]);

  return (
    <div ref={ref} className="contacts__content" id="contacts">
      <GoogleReCaptcha onVerify={recaptcha} />
      <p className="contacts__content-title">
        <FormattedMessage id="navbar.contacts" />
      </p>
      <p className="contacts__content-subtitle">
        <FormattedMessage id="messageMe" />
      </p>

      <form onSubmit={sendMessage}>
        <Intersector delay="100ms">
          <div className="form__input">
            <p className="form__label">
              <FormattedMessage id="contact.name" />
            </p>
            <input
              type="text"
              value={name.value}
              onChange={updateName}
              name="name"
            />
            {errors.name && (
              <p className="form__error">
                <FormattedMessage id={errors.name} />
              </p>
            )}
          </div>
        </Intersector>

        <Intersector delay="200ms">
          <div className="form__input">
            <p className="form__label">
              <FormattedMessage id="contact.email" />
            </p>
            <input
              type="text"
              value={email.value}
              onChange={updateEmail}
              name="email"
            />
            {errors.email && (
              <p className="form__error">
                <FormattedMessage id={errors.email} />
              </p>
            )}
          </div>
        </Intersector>

        <Intersector delay="300ms" threshold={0.3}>
          <div className="form__input">
            <p className="form__label">
              <FormattedMessage id="contact.message" />
            </p>
            <textarea
              value={message.value}
              onChange={updateMessage}
              name="message"
            />
            {errors.message && (
              <p className="form__error">
                <FormattedMessage id={errors.message} />
              </p>
            )}
          </div>
        </Intersector>

        <Intersector delay="400ms">
          <p
            className="form__recaptcha"
            dangerouslySetInnerHTML={{
              __html: formatMessage('contact.recaptcha', lang),
            }}
          />

          <div className="form__submit-btn">
            <button type="submit" disabled={!isValid} onClick={sendMessage}>
              <FormattedMessage id="contact.send" />
            </button>
          </div>
        </Intersector>
      </form>
    </div>
  );
};

export default Contacts;
