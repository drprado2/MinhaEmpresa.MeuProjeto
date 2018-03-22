import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import {HeaderMenu} from "./header-menu";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SideMenu extends React.Component {
  state = {
    collapsed: false,
  };

  selectedLink = '1';

  referenceLink = {
    '1': '/dashboard',
    '2': '/financeiro/lancamentos',
    '3': '/relacionamentos/familias',
    '4': '/financeiro/contas'
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  onMenuClick = ({item, key}) => {
    this.selectedLink = key;
    this.props.history.push({pathname: this.referenceLink[key]});
  }


  render() {
    return (
        <Sider
          id="side-menu"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu
            onClick={this.onMenuClick}
            theme="dark"
            defaultSelectedKeys={['1']}
            forceSubMenuRender={true}
            mode="inline">
            {!this.state.collapsed &&
              <HeaderMenu/>
            }
            {this.state.collapsed &&
              <div style={{height: '64px'}} />
            }
            <Menu.Item key="1">
              <Icon type="pie-chart" /> <span>Dashboard</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="line-chart" /><span>Financeiro</span></span>}
            >
              <Menu.Item key="2">
                <Icon type="paper-clip" /> Lançamentos
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="wallet" /> Contas
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Relacionamentos</span></span>}
            >
              <Menu.Item key="3">
                <Icon type="usergroup-add" /> Famílias
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
    );
  }
}

export default SideMenu;

