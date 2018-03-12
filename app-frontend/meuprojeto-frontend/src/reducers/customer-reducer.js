// Esse arquivo contém as strings que identificam a ação, é uma boa prática
// por elas em um arquivo separado e usar elas tanto nos reducers quanto nas actoins
import actionTypes from './../actions/action-types';

// É interessante termos o nosso estado inicial em uma constante e usarmos ele
// como valor default do nosso parâmetro na reducer, até que tenha algum valor ali
const INITIAL_STATE = {
  list: []
}


// A reducer é uma função que cuida de uma parte reduzida de todo o REDUX STORE
// Recebe 2 parâmetros o state e a action, o state por padrão inicia como INITIAL_STATE
// A action é o que virá das ACTION-CREATORS
export default (state = INITIAL_STATE, action) => {
  // Basicamente o que um REDUCER faz é um switch em cima do type da
  // nossa ACTION
  switch(action.type){
    // Quando é o type que nos interessa nós retornamos um novo objeto,
    // composto por todas as chaves do state e alterando a parte que nos interessa
    case actionTypes.GET_CUSTOMERS:
      return { ...state, list: action.payload }
    default:
      // É importante lembrar que um reducer sempre tem que retornar o state
      return state
  }
}