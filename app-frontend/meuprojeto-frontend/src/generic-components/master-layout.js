import React from 'react';
import { Layout } from "antd";
import {Header} from "./header";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logout} from '../actions/authentication-actions';
import {goToUsers} from './../actions/user-actions';
import {menuClick} from './../actions/menu-actions';
import {withRouter} from 'react-router-dom';
import Footer from './footer';
import SideMenu from "./side-menu";

const {Content} = Layout;

const MasterLayout = props => {

  return (
    <Layout>
      <SideMenu menuClick={props.menuClick} history={props.history}/>
      <Layout>
        <Header onUserConfigClick={props.goToUsers} logout={props.logout} />
        <Content>
          {props.children}
        </Content>
        <Footer/>
      </Layout>
    </Layout>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({logout, goToUsers, menuClick}, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(MasterLayout));

