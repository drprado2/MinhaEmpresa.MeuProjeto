import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export const FinancialSubmenu = props =>
  <SubMenu
    {...props}
    key="sub1"
    title={<span><Icon type="line-chart" /><span>Financeiro</span></span>}
  >
    <Menu.Item {...props} key="11">
      <Icon type="paper-clip" /> Lançamentos
    </Menu.Item>
    <Menu.Item {...props} key="12">
      <Icon type="wallet" /> Contas
    </Menu.Item>
  </SubMenu>
