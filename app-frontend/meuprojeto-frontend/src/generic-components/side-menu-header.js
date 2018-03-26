import React from 'react';
import {Avatar} from "./avatar";
import exampleAvatarImg from "./../img/example-avatar-img.jpeg";
import PropTypes from 'prop-types';

export const UserInfoText = props =>
  <span
    style={{
      height: '1.3em',
      fontWeight: 'bold',
      color: 'white',
      cursor: 'pointer'
    }}
    onClick={props.onClick}
  >
    {props.text}
  </span>

export const SideMenuHeader = props => {

  return (
    <div style={{
      height: '190px',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Avatar
        avatarImg={props.avatar}
        onClick={props.onUserInfoClick}
      />
      <UserInfoText onClick={props.onUserInfoClick} text={props.userName} />
      <UserInfoText onClick={props.onUserInfoClick} text={props.userEmail} />
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

