import React from 'react';
import {Card} from 'antd';
import logo from "./../../img/xo-miseria03.png";

export const LoginPanel = props =>
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
    {props.children}
  </Card>
