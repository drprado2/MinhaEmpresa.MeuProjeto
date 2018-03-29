import React from 'react';
import {Icon, Tooltip} from "antd";
import PropTypes from 'prop-types';

export const LogoutHeaderBtn = props =>
  <Tooltip placement="bottomLeft" title={"Sair da conta!"}>
    <Icon type="poweroff" style={{
      color: '#2A74FF',
      fontSize: 25,
      fontWeight: 'bold',
      cursor: 'pointer',
      marginRight: 15,
    }}
          onClick={props.onClick}
    />
  </Tooltip>

LogoutHeaderBtn.propTypes={
    onClick: PropTypes.func.isRequired
}

