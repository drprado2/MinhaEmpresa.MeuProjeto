import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import "./index.css";

// O componente BrowserRouter será usado para routeirizar a aplicação
// para mais detalhes veja o link
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

import App from './App';


ReactDOM.render(
    // Perceba que ligamos o <BrowserRouter como componente de maior ordem
        <App />
    , document.getElementById('root'));
registerServiceWorker();

// Por aqui é só vá para o arquivo App.bkp.js


/*
  Iniciando o projeto com React / roteirização / Redux

  1 - Instale globalmente o create-react-app
    ** npm install -g create-react-app
  2 - Crie um novo projeto react usando o create-react-app
    ** create-react-app my-app (Esse comando irá criar um diretório com o nome do projeto,
      e terá todoo seu projeto nesse diretório)
  3 - o seu novo projeto vem com alguns arquivos desnecessários como css, icon, e coisas a mais
    no .html, remova tudo que for desnecessário.
  4 - Agora vamos instalar o módulo para podermos roteirizar
    npm install --save react-router-dom
  5 - Vamos instalar o redux
    npm install --save redux
  6 - vamos instalar os conectores do redux com react
    npm install --save react-redux
  7 - vamos instalar o middleware para fazer chamadas assíncronas nas ActionCreators
    npm install --save redux-promise

  *** Pronto feitas essas instalações você está pronto para iniciar o projeto
  verifique os arquivos iniciando pelo index.js e vá seguindo os comentários. ***

 */


/*
  *** ENTENDENDO O CONCEITO DO REDUX ***
  *
  * Temos o nosso componente que lista clientes, cria, atualiza e deleta
  * aquela tela classica com grid formulário de criação e edição e botão para editar deletar e criar
  * precisamos acessar todos os clientes que temos atualmente, e tomar ações sobre eles
  * Nosso componente chama uma função especial chamada ACTION-CREATOR
  * Essa função provavelmente faz um request http e retornar um objeto chamado ACTION
  * Um objeto ACTION sempre possui uma propriedade TYPE que é uma string que identifica a ação
  * e as vezes possui uma propriedade PAYLOAD que é o retorno da request http
  * esse objeto ACTION é injetado no seu REDUCER que nós chamamos de ROOT-REDUCER
  * esse ROOT-REDUCER passa essa ACTION para todos os REDUCERS que são os reducers menores
  * que criamos para organizar melhor.
  * Cada REDUCER é uma função que recebe 2 parâmetros (state, action) o state é o estado da
  * nossa aplicação, e a action é o retorno da ACTION-CREATOR, o REDUCER faz um switch(action.type)
  * caso o reducer se importe com aquela ACTION-TYPE ele provavelmente mudará o estado da aplicação
  * e retornará um novo objeto contendo todo o stado antigo e mais o pedaço do novo stado
  * Essa alteração do estado causada pelo REDUCER faz com que o componente PROVIDER atualize
  * as props dos componentes ligados com o REDUX gerando assim o update dos mesmos.
  *
  * Logo sempre temos esse fluxo COMPONENTE CHAMA ACTION-CREATOR através de uma props
  * ACTION-CREATOR faz request http e despacha ACTION para o ROOT-REDUCER
  * ROOT-REDUCER passa a ACTION para todos os reducer que fazem parte dele
  * REDUCERS cada um verifica se se importa com aquela ACTION-TYPE quem se importa altera o estado
  * e retorna um novo objeto com o estado antigo e a parte alterada
  * PROVIDER atualiza a props de todos os componentes ligados com o REDUX STORE
 */
