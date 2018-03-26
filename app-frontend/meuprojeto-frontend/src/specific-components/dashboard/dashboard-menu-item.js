import React from 'react';
import { Menu, Icon } from 'antd';

export const DashboardMenuItem = props =>
  <Menu.Item {...props} key="1" >
    <Icon type="pie-chart" /> <span>Dashboard</span>
  </Menu.Item>
