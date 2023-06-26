import React, { useEffect, useState } from 'react';

const Hamburger = () => {
  const [windowW, setWindowW] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  const updateWindowW = () => {
    setWindowW(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowW);
    return () => {
      window.removeEventListener('resize', updateWindowW);
    };
  }, [windowW]);

  if (windowW > 767) return null;

  return (
    <>
      <div
        className={`hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <div className="hamburger__burger" />
      </div>
      <div className={`hamburger__menu${open ? ' open' : ''}`}>
        <p>test1</p>
        <p>test2</p>
        <p>test3</p>
        <p>test4</p>
        <p>test5</p>
      </div>
    </>
  );
};

export default Hamburger;
