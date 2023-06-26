import React from 'react'

const Logo = () => {
  return (
    <div className="logo">
      <img src={`${process.env.PUBLIC_URL}/LogoDM.svg`} alt="more" />
    </div>
  );
}

export default Logo