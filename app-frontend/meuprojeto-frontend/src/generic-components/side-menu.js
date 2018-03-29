import React from 'react';
import PropTypes from 'prop-types';
import {Icon, Layout, Menu} from 'antd';
import {SideMenuHeader} from "./side-menu-header";
import {DashboardMenuItem} from './../specific-components/dashboard/dashboard-menu-item';
import {RelationshipSubmenu} from './../specific-components/relationships/relationship-submenu';
import {FinancialSubmenu} from './../specific-components/financial/financial-submenu';

const {Sider} = Layout;

/*
  Atenção o controle dos itens do menu depende de uma key, que é um número
  passado como string, é essencial para por exemplo controlar que itens são abertos e fechados.
  Como isso não fica claro será controlado por comentários, mostrando qual key é do recurso.

  1  ~ 10 : dashboard
  11 ~ 20 : financeiro
  21 ~ 30 : relacionamentos
 */

export default class SideMenu extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => this.setState({ collapsed });

  componentDidMount(){
    this.props.menuClick("item_1");
  }

  onMenuClick = ({key}) => {
    this.props.menuClick(key);
  }

  render() {
    return (
        <Sider
          trigger={<div style={{backgroundColor: 'white'}}>
            {this.state.collapsed
              ? <Icon type="menu-unfold" style={{color: '#2A74FF', fontWeight: 'bold', fontSize: '1.2em'}} />
              : <Icon type="menu-fold" style={{color: '#2A74FF', fontWeight: 'bold', fontSize: '1.2em'}} />
            }
          </div>}
          id="side-menu"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{minHeight: '100vh', backgroundColor: '#e0e0e0', }}
        >
          <Menu
            onClick={this.onMenuClick}
            theme="light"
            defaultSelectedKeys={['item_1']}
            forceSubMenuRender={true}
            mode="inline"
            style={{borderRight: '0px'}}
          >
            {!this.state.collapsed
              ? <SideMenuHeader/>
              : <div style={{height: '64px'}} />
            }
            <DashboardMenuItem {...this.props} />
            <FinancialSubmenu {...this.props} />
            <RelationshipSubmenu {...this.props} />
          </Menu>
        </Sider>
    );
  }
}

SideMenu.propTypes={
  menuClick: PropTypes.func.isRequired
}
