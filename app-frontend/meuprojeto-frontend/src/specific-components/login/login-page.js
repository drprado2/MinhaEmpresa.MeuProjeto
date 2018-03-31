import React from 'react';
import {authenticate} from '../../actions/authentication-actions';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {Authenticator} from "../../utils/authenticator";
import {BackgroundBlurImage} from "../../generic-components/background-blur-image";
import {LoginPanel} from './login-panel';
import LoginForm from "./login-form";
import {FullBoxCentralizing} from "../../generic-components/full-box-centralizing";
import backgroundImage from './../../img/background-login-page.jpg';
import CreateUserModal from './../user/create-user-modal';
import {createUser} from './../../actions/user-actions';
import { message } from 'antd';

class LoginPage extends React.Component{
  state={
    showCreateUserModal: false
  }

  login = values => {
      this.props.authenticate(values)
  }

  onCreateUser = () => this.setState({showCreateUserModal: true});

  componentDidMount(){
    if(Authenticator.IsAuthenticated())
      this.props.history.push('/dashboard')
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.userCreated){
      this.setState({showCreateUserModal: false});
      message.success('Usuário criado com sucesso!');
    }
  }

  onCancelCreateUserModal = () => this.setState({showCreateUserModal: false});

  render() {
    const {userLoading, loading, errors, createUser, userErrors} = this.props;
    const {showCreateUserModal} = this.state;

    return (
      <FullBoxCentralizing>
        <CreateUserModal
          onCancel={this.onCancelCreateUserModal}
          loading={userLoading}
          createUser={createUser}
          show={showCreateUserModal}
          errors={userErrors}
        />
        <BackgroundBlurImage image={backgroundImage} />
        <LoginPanel>
          <LoginForm onCreateUser={this.onCreateUser} errors={errors} onLogin={this.login} loading={loading}/>
        </LoginPanel>
      </FullBoxCentralizing>
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
    authenticated: state.authentication.authenticated,
    userLoading: state.users.loading,
    userErrors: state.users.errors,
    userCreated: state.users.userCreated
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({authenticate, createUser}, dispatch);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));


