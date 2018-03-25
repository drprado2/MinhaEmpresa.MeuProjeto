import React from 'react';
import {authenticate} from './../../actions/authenticationActions';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {Authenticator} from "../../authenticator";
import {BackgroundBlurImage} from "./../../components/background-blur-image";
import {LoginPanel} from './login-panel';
import LoginForm from "./login-form";
import {FullBoxCentralizing} from "./../../components/full-box-centralizing";
import backgroundImage from './../../img/background-login-page.jpg';

class LoginPage extends React.Component{

  login = values => {
      this.props.authenticate(values)
  }

  componentDidMount(){
    if(Authenticator.IsAuthenticated())
      this.props.history.push('/dashboard')
  }

  render() {
    const {loading, errors} = this.props;

    return (
      <FullBoxCentralizing>
        <BackgroundBlurImage image={backgroundImage} />
        <LoginPanel>
          <LoginForm errors={errors} onLogin={this.login} loading={loading}/>
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
    authenticated: state.authentication.authenticated
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({authenticate}, dispatch);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));


