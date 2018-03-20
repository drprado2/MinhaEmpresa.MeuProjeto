import React from 'react';
import { Modal, Button } from 'antd';

export class EditModal extends React.Component {

  render() {
    const { visible, loading, onSave, onCancel } = this.props;
    return (
      <div>
        <Modal
          visible={visible}
          title="Title"
          footer={[
            <Button key="back" onClick={onCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={onSave}>
              Submit
            </Button>,
          ]}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

