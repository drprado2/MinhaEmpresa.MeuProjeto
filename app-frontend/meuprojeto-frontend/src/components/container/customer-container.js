import React, { Component } from 'react'

// Necessário para vincular uma função como um actionCreator, e o redux já fazer
// o dispatch do retorno dessas funções para os reducers
import { bindActionCreators } from "redux";

// Necessário para conectar o componente com o REDUX STORE
import { connect } from 'react-redux';

// Necessário importar as funções que serão ACTION-CREATORS
import { getCustomers } from "../../actions/customer-action";

class CustomerContainer extends Component{
  constructor(props){
    super(props);

    this.state = {
      customers: []
    }
  }

  componentDidMount(){
    // Chamando uma ACTION-CREATOR note que ela vem via PROPS
    this.props.getCustomers();
  }

  componentWillReceiveProps(nextProps){
    console.log("Componente vai receber props", nextProps)
  }

  render(){
    // Aqui estamos verificando se a parte do estado que queremos já foi injetada
    if(!this.props.customers)
      return (<div>Carregando...</div>)

    return (
      <div>
        Carregou
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(CustomerContainer);