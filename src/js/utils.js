import en from '../translations/en.json';
import it from '../translations/it.json';

export const formatMessage = (id, lang) => {
  if (lang === 'it' && it[id]) {
    return it[id];
  }
  if (en[id]) {
    return en[id];
  }
  return id;
};

export const emailPattern =
  /^(([a-zA-Z\-_0-9+]+(\.[a-zA-Z\-_0-9+]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
