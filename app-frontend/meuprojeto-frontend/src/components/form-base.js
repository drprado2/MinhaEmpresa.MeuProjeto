import React from 'react';
import {Card, Form} from 'antd';
import {showErrorMessage} from "./show-error-message";

export class FormBase extends React.Component{
  errorFields=[];

  componentDidUpdate(prevProps){
    if(this.props.errors && !prevProps.errors){
      this.errorFields = {};
      const generic = this.props.errors.filter(x => x.ref == 'genericError');
      showErrorMessage(generic);
      this.props.form.validateFields({force: true}, err => {
        console.log("Veja os erros que deu após fazer a att", err);
        this.errorFields = err
      });
    }
  }

  validateServerInputErrors = (rule, value, callback) => {

    const {errors, form} = this.props;

    const fieldAlreadyHaveError = !!this.errorFields[rule.field];

    if(fieldAlreadyHaveError)
      callback();

    const existErrors = errors && errors.filter(x => x.ref === rule.field).length > 0;

    const getErrorMessage = () => errors.filter(x => x.ref === rule.field)[0].message;

    if(existErrors)
      callback(getErrorMessage())

    callback();
  }
}


/*
  *** ATENÇÃO O PROJETO USA A LIB ANT.DESIGN E ESSE FORM É UMA IMPLEMENTAÇÃO EM CIMA DELA ***

  Esse componente foi criado para facilitar a criação de formulários com validação
  Ele irá automaticamente colocar uma borda vermelha e uma mensagem de erro abaixo de campos
  para erros que vierem do servidor. Ele tmb irá automaticamente imprimir erros do servidor
  genéricos em um popup que some sozinho em 20 segundos ou se o usuário apertar no X.

  Para ele funcionar sigua os seguintes passos

  1 - Faça seu formulário herdar de FormBase EX: class MeuForm extends FormBase
  2 - implemente o método render e crie todos seus inputs da seguinte maneira

  Atenção as rules veja que adicionamos um validator para a função existente na base.
  {getFieldDecorator('user', {
    rules: [{validator: this.validateServerInputErrors}],
    validateTrigger: 'onBlur'
  })(
    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
  )}

  3 - Trate os erros com a seguinte estrutura, um array de objetos com chave ref e message
  a chave ref terá o nome do input do form ou um nome especial para casos genéricos.
  EX:
  [{ref: 'nomeDaMinhaProp', message: 'Mensagem do erro'}] => Assim para erro especifico de input
  [{ref: 'genericError', message: 'texto do erro'}] => Assim para erros gerais
 */


