import React from 'react';
import {Icon, Popover} from "antd";
import PropTypes from 'prop-types';

export const HeaderPopover = props => {

  const iconStyle = {
    color: '#2A74FF',
    fontSize: 25,
    fontWeight: 'bold',
    cursor: 'pointer',
    marginRight: 15,
  }

  return(
    <Popover
      placement="bottomRight"
      content={props.popoverContent}
      title="Meu Usuário"
    >
      <Icon type={props.iconType} style={iconStyle} />
    </Popover>
  )
}

HeaderPopover.propTypes={
  iconType: PropTypes.string.isRequired,
  popoverContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
}