import React from 'react';
import {Modal} from 'antd';

export const DeleteModal = props => {

  return (
    <Modal
      title={props.title}
      visible={props.visible}
      onOk={props.onOk}
      confirmLoading={props.loading}
      okType="danger"
      bodyStyle={{padding: 0}}
      onCancel={props.onCancel}
      okText="Confirmar"
      cancelText="Cancelar"
    />
  )
}