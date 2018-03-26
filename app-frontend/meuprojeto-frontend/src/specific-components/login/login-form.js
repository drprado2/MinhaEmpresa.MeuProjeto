import React from 'react';
import PropTypes from 'prop-types';
import "./login.css";
import {Button, Checkbox, Form, Icon, Input} from "antd";
import {FormBase} from "../../generic-components/form-base";

const FormItem = Form.Item;

class LoginForm extends FormBase{

  onLogin = (event) => {
    event.preventDefault();
    const {form, onLogin} = this.props;

    form.validateFieldsAndScroll((err, values) => {
      if(!err)
        onLogin(values);
    })
  }

  render(){

    const { getFieldDecorator } = this.props.form;
    const {loading} = this.props;

    return (
      <div id="main-login" >
        <Form onSubmit={this.onLogin} className="login-form">
          <FormItem>
            {getFieldDecorator('user', {
              rules: [
                { required: true, message: 'Por favor preencha o usuário!' },
                {validator: this.validateServerInputErrors}
              ],
              validateTrigger: 'onBlur'
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem >
            {getFieldDecorator('password', {
              rules: [
                {required: true, message: 'Por favor preencha a senha'},
                {validator: this.validateServerInputErrors}
              ],
              validateTrigger: 'onBlur'
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('rememberMe', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Lembrar-me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Esqueci minha senha</a>
            <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
              Logar
            </Button>
            Ou <a href="">registrar agora!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(LoginForm);

LoginForm.propTypes={
  onLogin: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.array
}
