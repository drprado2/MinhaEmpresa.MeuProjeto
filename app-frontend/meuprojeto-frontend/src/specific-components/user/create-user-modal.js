import React from 'react';
import {FormBase} from './../../generic-components/form-base';
import PropTypes from 'prop-types';
import {Button, Modal, Form, Icon, Input} from "antd";

const FormItem = Form.Item;

class CreateUserModal extends FormBase {

  onCreate = () => {
    const {form, createUser} = this.props;

    form.validateFieldsAndScroll((err, values) => {
      if(!err)
        createUser(values);
    })
  }

  validateConfirmPassword = (rule, value, callback) => {
    const password = this.props.form.getFieldValue('password');
    if(password != value){
      callback("As senhas não conferem!");
      return;
    }

    callback();
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.show && this.props.show)
      this.props.form.resetFields();
  }

  validateLogin = (rule, value, callback) => {
    if(!value){
      callback();
      return;
    }

    let errors = [];

    if(/[A-Z]/gm.test(value))
      errors.push("letras maiúsculas");
    if(/[!@#$%*()_+^&{}}:;?.]/gm.test(value))
      errors.push("caracteres especiais");
    if(value.indexOf(' ') > -1)
      errors.push("espaços em branco");

    if(errors.length > 0)
      callback(`Login não pode possuir ${errors.join(",")}!`);

    callback();
  }

  onCancel = () => {
    this.props.form.resetFields();
    this.props.onCancel();
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    const {loading, show} = this.props;

    return(
      <div>
        <Modal
          title="Criar Usuário"
          visible={show}
          onCancel={this.onCancel}
          okText="Confirmar!"
          onOk={this.onCreate}
          confirmLoading={loading}
        >
          <Form onSubmit={this.onCreate}>
            <FormItem label="E-mail" hasFeedback >
              {getFieldDecorator('email', {
                rules: [
                  { required: true, message: 'Por favor preencha o e-mail!' },
                  { type: "email", message: 'Por favor preencha um e-mail válido!' },
                  {validator: this.validateServerInputErrors}
                ],
                validateTrigger: 'onBlur'
              })(
                <Input type="email" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="E-mail" />
              )}
            </FormItem>
            <FormItem label="Login" hasFeedback >
              {getFieldDecorator('login', {
                rules: [
                  { required: true, message: 'Por favor preencha o login!' },
                  {validator: this.validateServerInputErrors},
                  {validator: this.validateLogin}
                ],
                validateTrigger: 'onBlur'
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Login" />
              )}
            </FormItem>
            <FormItem label="Senha" hasFeedback >
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Por favor preencha a senha!' },
                  { validator: this.validateServerInputErrors }
                ],
                hasFeedback: true,
                validateTrigger: 'onBlur'
              })(
                <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Senha" />
              )}
            </FormItem>
            <FormItem label={<span>Confirmar Senha</span>} hasFeedback >
              {getFieldDecorator('confirmPassword', {
                rules: [
                  { required: true, message: 'Por favor repita a senha!' },
                  {validator: this.validateConfirmPassword}
                ],
                validateTrigger: 'onBlur'
              })(
                <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Confirmar Senha" />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

const MyForm = Form.create()(CreateUserModal);

MyForm.propTypes={
  show: PropTypes.bool.isRequired,
  createUser: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.array
}
export default MyForm;