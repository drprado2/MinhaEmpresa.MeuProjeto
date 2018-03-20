import React from 'react';
import { DeleteGridBtn } from "../../components/delete-grid-btn";
import { EditGridBtn } from "../../components/edit-grid-btn";
import { Table } from "antd";


const ActionButtons = props => {
  return (
    <div>
      <EditGridBtn style={{marginRight: '5px'}} onClick={props.onEdit} />
      <DeleteGridBtn onClick={props.onDelete} />
    </div>
  )
}

export const FamilyGrid = props => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
  },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <ActionButtons
        onDelete={props.onDelete}
        onEdit={props.onEdit} /> },
  ];

  return (
    <div style={{
      display: 'flex',
      paddingBottom: 20,
      paddingTop: 15,
      alignItems: 'center',
    }}>
      <Table style={{flexGrow: 1}} bordered columns={columns} dataSource={props.data} />
    </div>
  )
}