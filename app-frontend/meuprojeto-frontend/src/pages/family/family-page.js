import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { getCustomers } from "../../actions/customer-action";
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
    this.props.getCustomers();
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

// Função necessária para injetarmos parte do estado da aplicação como uma props
// do nosso componente, é uma função que recebe o state inteiro e retorna
// um objeto contendo apenas a parte que queremos do state
const mapStateToProps = (state) => {
  // Note que fizemos state.customers.list isso é composto da seguinte forma:
  // state => é o nome da variável recebida via parâmetro e contém todo o estado
  //  customers => é o nome da chave que nós demos lá no ROOT-REDUCER quando ligamos o customer-reducer
  //    list => é o nome de uma das chaves composta no State do CustomerReducer
 return { customers: state.customers.list }
}

// Aqui fazemos o mapeamento das funções que serão ACTION-CREATORS
// Essas funções devem retornar uma ACTION, essas ACTIONS retornadas
// serão dispachadas para o ROOT-REDUCER que por sua vez repassa para todos os
// reducers
// Recebe como parâmetro a função para dispachar, isso será passado pelo redux
// retorna o retorno da função bindActionCreators importada de redux
// Essa função recebe como parâmetro um objeto contendo as funções que queremos
// disponibilizar como actionCreators e o dispatcher
// note que getCustomers é o mesmo que getCustomers: getCutomers é apenas uma feature do ES6
// o nome dessa chave será o nome que acessaremos via props EX: props.getCustomers
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCustomers }, dispatch);
}

// A outra diferença fica na forma como exportamos nosso componente, utilizamos a
// função connect que importamos de react-redux chamamos ela com nossas duas funções
// recem criadas a função para ligar com o state e a função para ligar os ActionCreators
// Essa função retorna outra função que de maneira encadeada já chamamos passando
// o nosso componente.
export default connect(mapStateToProps, mapDispatchToProps)(FamilyContainer);