import React from 'react';

const FlexBox = props => {

  return (
    <div style={{
      display: 'flex',
      flexDirection: props.direction ? props.direction : 'row'
    }}>
      {props.children}
    </div>
  )
}

export default FlexBox;