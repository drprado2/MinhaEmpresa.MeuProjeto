import React from 'react';
import { Layout, Icon, Popover } from "antd";
import logo from "./../img/xo-miseria03.png";

const { Header } = Layout;

const UserContent = props => {

  const iconStyle={
    fontWeight: 'bold',
    fontSize: '1.2em',
    marginRight: '5px'
  }

  const contentItemStyle={
    height: '30px',
    display: 'flex',
    flexDirection: 'row',
    fontWeight: 'bold',
    cursor: 'pointer',
    alignItems: 'center'
  }

  return (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }}>
    <div onClick={() => props.onItemClick("/usuario")} style={contentItemStyle}>
      <Icon style={iconStyle} type="setting"/>Configurações
    </div>
    <div onClick={() => props.logout()} style={contentItemStyle}>
      <Icon style={iconStyle} type="poweroff"/>Logout
    </div>
  </div>
  )
}

export const HeaderLayout = props => {

  const iconStyle = {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    cursor: 'pointer',
    marginRight: 15,
  }

  function onItemClick(url){
    props.history.push({pathname: url});
  }

  return (
    <Header style={{
      backgroundColor: 'rgb(0, 21, 41)',
      display: 'flex',
      padding: 0,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }} >
      <div style={{
        height: '36px',
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        width: '180px',
        marginLeft: '10px'
      }} />
      <div style={{flexGrow: 1}} />
      <Popover
        placement="bottomRight"
        content={<UserContent logout={props.logout} onItemClick={onItemClick} />}
        title="Meu Usuário"
      >
        <Icon type="user" style={iconStyle} />
      </Popover>
    </Header>
  )
}