import React from 'react';
import { Layout } from "antd";
import {HeaderLayout} from "./header-layout";

const { Content, Footer } = Layout;

export const CenterLayout = props => {

  return (
    <Layout>
      <HeaderLayout history={props.history} />
          {props.children}
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  )
}

