import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';

  import { Breadcrumb, Layout, Menu,Tree } from 'antd';
  import React, { useState } from 'react';
  const { Header, Content, Footer, Sider } = Layout;
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];
 
  
  const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
      };
      const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      };
      const treeData = [
        {
          title: 'parent 1',
          key: '0-0',
          children: [
            {
              title: 'parent 1-0',
              key: '0-0-0',
            //   disabled: true,
              children: [
                {
                  title: 'leaf',
                  key: '0-0-0-0',
                  disableCheckbox: true,
                },
                {
                  title: 'leaf',
                  key: '0-0-0-1',
                },
              ],
            },
            {
              title: 'parent 1-1',
              key: '0-0-1',
              children: [
                {
                  title: (
                    <span
                      style={{
                        color: '#1890ff',
                      }}
                    >
                      sss
                    </span>
                  ),
                  key: '0-0-1-0',
                },
                {
                    title: (
                      <span
                        style={{
                          color: 'red',
                        }}
                      >
                        sss
                      </span>
                    ),
                    key: '0-0-1-1',
                  },
              ],
            },
          ],
        },
      ];
    return (
      
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          />
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
       
   111111111
   <Tree
   checkable
   defaultExpandedKeys={['0-0-0', '0-0-1']}
   defaultSelectedKeys={['0-0-0', '0-0-1']}
   defaultCheckedKeys={['0-0-0', '0-0-1']}
   onSelect={onSelect}
   onCheck={onCheck}
   treeData={treeData}
 />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  };
  export default App;