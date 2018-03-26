import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export const RelationshipSubmenu = props =>
  <SubMenu
    {...props}
    key="sub2"
    title={<span><Icon type="team" /><span>Relacionamentos</span></span>}
  >
    <Menu.Item {...props} key="21">
      <Icon type="usergroup-add" /> Famílias
    </Menu.Item>
  </SubMenu>
