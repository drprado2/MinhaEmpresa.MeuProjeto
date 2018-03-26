import React from 'react';
import PropTypes from 'prop-types';

export const BackgroundBlurImage = props =>
  <div
    style={{
      backgroundImage: `url(${props.image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      top: '0',
      left: '0',
      filter: `blur(${props.blurValue})`
    }}
  />

BackgroundBlurImage.propTypes={
  image: PropTypes.string.isRequired,
  blurValue: PropTypes.string
}

BackgroundBlurImage.defaultProps={
  blurValue: '1.5px'
}
