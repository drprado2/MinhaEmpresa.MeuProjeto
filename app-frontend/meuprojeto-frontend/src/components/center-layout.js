import React from 'react';
import { Layout } from "antd";
import {HeaderLayout} from "./header-layout";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {logout} from './../actions/authenticationActions';
import {withRouter} from 'react-router-dom';

const { Content, Footer } = Layout;

const CenterLayout = props => {

  return (
    <Layout>
      <HeaderLayout logout={props.logout} history={props.history} />
          {props.children}
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({logout}, dispatch);

export default withRouter(connect(null, mapDispatchToProps)(CenterLayout));

