import React, { Component } from 'react'
import { Layout, Button, Icon, Input } from "antd";
import {EditModal} from '../../components/edit-modal';
import {CustomerForm} from './family-form-fields';
import {FamilyGrid} from "./family-grid";
import {FamilyFilters} from "./family-filters";
import {DeleteModal} from "../../components/delete-modal";

const { Content } = Layout;

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park',
}];

class FamilyContainer extends Component{
  constructor(props){
    super(props);

    this.state = {
      customers: [],
      userName: '',
      editModalVisible: false,
      saveLoading: false,
      searchLoading: false,
      deleteLoading: false,
      deleteModalVisible: false,
    }
  }

  componentDidMount(){
  }

  onSaveForm = () => {
    this.setState({saveLoading: true})
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        this.setState({saveLoading: false})
        return;
      }

      setTimeout(()=>{
        console.log('Received values of form: ', values);
        form.resetFields();
        this.setState({ editModalVisible: false, saveLoading: false });
      }, 2000)
    });
  }

  onEdit = () => {
    this.setState({editModalVisible: true})
  }

  onCancelForm = () => {
    this.setState({editModalVisible: false})
  }

  onDelete = () => {
    this.setState({deleteModalVisible: true});
  }

  onConfirmDelete = () => {
    this.setState({deleteLoading: true});
    setTimeout(() => {
      this.setState({deleteLoading: false, deleteModalVisible: false});
    }, 3000)
  }

  onCancelDelete = () => {
    this.setState({deleteLoading: false, deleteModalVisible: false});
  }

  onSearch = filterValues => {
    this.setState({searchLoading: true});
    console.log("Veio buscar", filterValues);
    setTimeout(() => {
      this.setState({searchLoading: false});
    }, 2000)
  }


  render(){
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

    return (
      <Content style={{ margin: '0 16px' }}>
        <EditModal
          onSave={this.onSaveForm}
          visible={this.state.editModalVisible}
          onCancel={this.onCancelForm}
          loading={this.state.saveLoading}
        >
          <CustomerForm ref={form => this.form = form} />
        </EditModal>
        <DeleteModal
          title="Deseja realmente deletar o cliente?"
          visible={this.state.deleteModalVisible}
          onOk={this.onConfirmDelete}
          loading={this.state.deleteLoading}
          onCancel={this.onCancelDelete}
        />
        <div style={{ margin: '16px 0', padding: 24, background: '#fff', minHeight: 360 }}>
          <div style={{display: 'flex', flexDirection: 'row' }}>
            <h1 style={{flexGrow: 1}}>Clientes</h1>
            <Button type="primary" icon="user-add" size="large">Adicionar</Button>
          </div>
          <hr/>
          <FamilyFilters loading={this.state.searchLoading} onSearch={this.onSearch}/>
          <FamilyGrid
            deleteLoading={this.state.deleteLoading}
            onEdit={this.onEdit}
            data={data}
            onDelete={this.onDelete}
          />
        </div>
      </Content>
    )
  }
}

export default FamilyContainer;