import PropTypes from 'prop-types';
import en from '../../translations/en.json';
import it from '../../translations/it.json';
import { useSelector } from 'react-redux';

const FormattedMessage = ({ id }) => {
  const lang = useSelector((state) => state.lang.lang);
  if (lang === 'it' && it[id]) {
    return it[id];
  }
  if (en[id]) {
    return en[id];
  }
  return id;
};

FormattedMessage.propTypes = {
  id: PropTypes.string,
};

export default FormattedMessage;
