import React from 'react';
import {Button, Tooltip} from "antd";

export const DeleteGridBtn = props => {

  return (
    <Tooltip placement="top" title="Deletar">
      <Button style={props.style} onClick={props.onClick} type="danger" shape="circle" icon="delete" />
    </Tooltip>
  )
}
