// Necessário para ligar todos os reducers tornando eles 1 só
import { combineReducers } from 'redux';
// Exemplo de um pequeno reducer nosso, verifique esse arquivo para entender melhor
import customerReducer from './customer-reducer';

// Exportamos a criação feita pela combineReducers que será o nosso MAIN-REDUCER
// o reducer composto pela união de todos os nossos reducers
export default combineReducers(
  // A função recebe um objeto como parâmetro, note que o nome da chave do objeto
  // EX: customers é como acessaremos esse estado nos componentes
  // Teremos um objeto chama customers e esse objeto será composto pelas chaves retornadas
  // do objeto de "customerReducer"
  {
  customers: customerReducer
});
