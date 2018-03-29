import React from 'react';
import {Avatar} from "./avatar";
import exampleAvatarImg from "./../img/example-avatar-img.jpeg";
import PropTypes from 'prop-types';

export const SideMenuHeader = props => {

  return (
    <div style={{
      height: '190px',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRight: '0px',
      borderBottom: '1px solid'
    }}>
      <Avatar
        avatarImg={props.avatar}
        onClick={props.onUserInfoClick}
      />
      <span
        style={{
          height: '1.3em',
          fontWeight: 'bold',
          color: '#212121',
          fontSize: '1.2em',
          cursor: 'pointer'
        }}
        onClick={props.onUserInfoClick}
      >
        {props.userName}
      </span>
      <span
        style={{
          height: '1.3em',
          fontWeight: 'bold',
          color: '#424242',
          fontSize: '0.9em',
          cursor: 'pointer'
        }}
        onClick={props.onUserInfoClick}
      >
        {props.userEmail}
      </span>
    </div>
  )
}

SideMenuHeader.propTypes={
  avatar: PropTypes.string,
  onUserInfoClick: PropTypes.func,
  userName: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
}

SideMenuHeader.defaultProps={
  avatar: exampleAvatarImg,
  onUserInfoClick: () => alert("Clicou nas info de usuário"),
  userName: "Adriano",
  userEmail: "drprado2@gmail.com"
}

