import React from 'react';
import "./login.css";
import {Card, Form, Icon, Input, Button, Checkbox} from 'antd';
import logo from "./../../img/xo-miseria03.png";
import {authenticate} from './../../actions/authenticationActions';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {Authenticator} from "../../authenticator";
import {FormBase} from './../../components/form-base';

const { Meta } = Card;
const FormItem = Form.Item;

class LoginForm extends FormBase{

  login = (event) => {
    event.preventDefault();
    const {form} = this.props;

    form.validateFields((errors, fields) => {
      if(!errors)
        this.props.authenticate(fields)
    })
  }

  componentDidMount(){
    if(Authenticator.IsAuthenticated())
      this.props.history.push('/dashboard')
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
      }}>
        <div
          style={{
            backgroundImage: 'url(http://www.acpassessoria.com.br/wp-content/uploads/2015/06/abertura-empresa.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            top: '0',
            left: '0',
            filter: 'blur(1.5px)'
          }}
        />
        <Card
          style={{ width: 350,
            borderRadius: '5px',
            border: 'none',
            boxShadow: '0px 0px 15px 1px rgba(0,0,0,0.75)',
            backgroundColor: 'unset'
          }}
          bodyStyle={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}
          cover={<div style={{
            borderTopLeftRadius: '5px',
            borderTopRightRadius: '5px',
            height: '100px',
            backgroundColor: 'rgb(0, 21, 41)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <img src={logo} alt=""/>
          </div>}
        >
          <div id="main-login" >
            <Form onSubmit={this.login} className="login-form">
              <FormItem>
                {getFieldDecorator('user', {
                  rules: [{ required: true, message: 'Por favor preencha o usuário!' },
                    {validator: this.validateServerInputErrors}
                  ],
                  validateTrigger: 'onBlur'
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem >
                {getFieldDecorator('password', {
                  rules: [{required: true, message: 'Por favor preencha a senha'},
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
                <Button loading={this.props.loading} type="primary" htmlType="submit" className="login-form-button">
                  Logar
                </Button>
                Ou <a href="">registrar agora!</a>
              </FormItem>
            </Form>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.authentication.userName,
    loading: state.authentication.loading,
    errors: state.authentication.errors,
    userLogin: state.authentication.userLogin,
    userEmail: state.authentication.userEmail,
    authenticated: state.authentication.authenticated
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({authenticate}, dispatch);


export const Login = withRouter(connect(mapStateToProps, mapDispatchToProps)(Form.create()(LoginForm)));


