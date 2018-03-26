import React from 'react';
import {Button, Tooltip} from "antd";

export const EditGridBtn = props => {

  return (
    <Tooltip placement="top" title="Editar">
      <Button style={props.style} onClick={props.onClick} shape="circle" icon="edit" />
    </Tooltip>
  )
}
