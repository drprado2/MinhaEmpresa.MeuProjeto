import React from 'react';
import PropTypes from 'prop-types';
import {HeaderPopover} from './../../generic-components/header-popover';
import {Icon} from "antd";

const Content = props =>{

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
      <div onClick={props.onUserConfigClick} style={contentItemStyle}>
        <Icon style={iconStyle} type="setting"/>Configurações
      </div>
    </div>
  )
}

export const UserHeaderPopover = props =>
  <HeaderPopover
    iconType="user"
    popoverContent={<Content onUserConfigClick={props.onUserConfigClick} />}
  />

UserHeaderPopover.propTypes={
  onUserConfigClick: PropTypes.func
}
