import React from 'react';
import logo from "./../img/xo-miseria03.png";

export const HeaderLogo = () =>
  <div style={{
    height: '36px',
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    width: '180px',
    marginLeft: '10px'
  }} />
