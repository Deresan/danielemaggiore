import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEn, setIt } from '../../js/store/translations';
import { en, it } from '../../assets/img';

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang);
  const [open, setOpen] = useState(false);
  const [windowW, setWindowW] = useState(window.innerWidth);

  const updateWindowW = () => {
    setWindowW(window.innerWidth);
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const clickIt = () => {
    setOpen(false);
    dispatch(setIt());
  };

  const clickEn = () => {
    setOpen(false);
    dispatch(setEn());
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowW);
    return () => {
      window.removeEventListener('resize', updateWindowW);
    };
  }, [windowW]);

  if (windowW <= 767) return null;

  return (
    <div
      className={`language-selector${open ? ' open' : ''}`}
      onClick={toggleOpen}
      onMouseLeave={() => setOpen(false)}
    >
      {open && (
        <img
          src={lang === 'it' ? en : it}
          alt={lang}
          onClick={lang === 'it' ? clickEn : clickIt}
        />
      )}
      <img src={lang === 'it' ? it : en} alt={lang} />
    </div>
  );
};

export default LanguageSelector;
