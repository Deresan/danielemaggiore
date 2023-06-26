import en from '../translations/en.json'
import it from '../translations/it.json'

export const formatMessage = (id, lang) => {
  if (lang === 'it' && it[id]) {
    return it[id]
  }
  if (en[id]) {
    return en[id]
  }
  return id;
}