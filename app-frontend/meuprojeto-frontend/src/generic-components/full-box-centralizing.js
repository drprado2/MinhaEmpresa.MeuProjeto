import React from 'react';

export const FullBoxCentralizing = props =>
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh'
  }}>
    {props.children}
  </div>

