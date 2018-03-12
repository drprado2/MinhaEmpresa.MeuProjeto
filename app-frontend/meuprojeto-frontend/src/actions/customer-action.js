// Arquivo contendo as strings que identificam as action-types
import actionTypes from './action-types';
// Objeto que interfaceia as chamadas a API REST de customer
// Verifique esse arquivo para entender melhor
import CustomerService from './../services-api/customer-service';

// Exportamos as funções que são as Action-Creators
// Elas sempre retornam um objeto que é a Action
// Que sempre possui uma propriedade type que identifica a ação
// e as vezes um payload que é uma Promise referente à chamada à API REST
// Note que para podermos retornar uma Promise no payload precisamos do
// Middleware REDUX-PROMISE já explicado no arquivo App.js
export const getCustomers = () => {
  return {
    type: actionTypes.GET_CUSTOMERS,
    // Aqui retornamos a promise veja os services para melhor entendimento
    payload: CustomerService.get()
  }
}