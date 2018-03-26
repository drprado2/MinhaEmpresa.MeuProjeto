import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from "antd";

export const Avatar = props =>
  <div style={{
    width: props.width,
    height: props.height,
    borderRadius: (props.width / 2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00AB1F',
    backgroundImage: `url(${props.avatarImg})`,
    backgroundSize: '100% 100%',
    marginBottom: '1em',
    cursor: 'pointer'
  }}
    onClick={props.onClick}
  >
    {!props.avatarImg &&
      <Icon type="user" style={{
        fontSize: (props.width / 2),
        fontWeight: 'bold',
        color: 'white'}}
      />
    }
  </div>

Avatar.propTypes={
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    avatarImg: PropTypes.string,
    onClick: PropTypes.func
}

Avatar.defaultProps={
    width: 120,
    height: 120,
    avatarImg: ""
}


