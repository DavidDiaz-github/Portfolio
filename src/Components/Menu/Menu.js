import React, { useState, useEffect } from 'react';
import { Link, withRouter,Switch, Route } from "react-router-dom";
import { Menu, Layout, Spin } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    DownloadOutlined,
    AppstoreAddOutlined,
    SolutionOutlined,
    ProjectOutlined
} from '@ant-design/icons';
import logo from '../../assets/png/logo-white.png';

import './menu.scss';

function MenuSider(props) {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const { routes } = props;
  // console.log(routes); 
    const toggleCollapsed = () => {
        setIsCollapsed(!isCollapsed)
    }

    const { Header, Sider, Content } = Layout;
    
  
  
    return  (
      <Layout >
        <Sider trigger={null} collapsible collapsed={isCollapsed}  style={{backgroundColor:'#202224'}}>
          <div className="logo"><Link to='/'><img src={logo} alt='Logo web' /></Link></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}  style={{backgroundColor:'#202224'}}>
            <Menu.Item key="/profile" icon={<UserOutlined />}>
              <Link to={'/profile'}>Perfil</Link>
            </Menu.Item>
            <Menu.Item key="/project" icon={<ProjectOutlined />}>
              <Link to={'/project'}>Proyectos</Link>
            </Menu.Item>
            <Menu.Item key="/education" icon={<SolutionOutlined />}>
              <Link to={'/education'}>Estudios</Link>
            </Menu.Item>
            <Menu.Item key="/skill" icon={<AppstoreAddOutlined />}>
              <Link to={'/skill'}>Skill</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" >
          <Header className="site-layout-background" style={{ padding: 0, backgroundColor:'#202224' }}>
            {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggleCollapsed,
            })}
          </Header>
          <Content>
              {routes ? <LoadRoutes routes={routes} /> : <Spin tip='Cargando' style={{width:'200px'}} />}
          </Content>
          
        </Layout>
      </Layout>
    );
}

function LoadRoutes({ routes }) {
  
    return (
      
        <Switch>
            {routes.map((route, index) => (
                <Route 
                    key= {index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    );
}

export default withRouter(MenuSider);
