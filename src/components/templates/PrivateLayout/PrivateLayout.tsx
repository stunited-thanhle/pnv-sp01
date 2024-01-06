import {
  AppstoreAddOutlined,
  BankOutlined,
  BarChartOutlined,
  DeploymentUnitOutlined,
} from '@ant-design/icons';
import { Col, Layout, Menu, Typography } from 'antd';
import { FC, ReactNode, Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { SpinLoading } from '@app/components/atoms';
import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';
import LayoutTopbar from '../LayoutTopbar/LayoutTopbar';
import ProtectedRoute from '../ProtectedRoute';

import './PrivateLayout.scss';

const { Content, Sider } = Layout;

const PrivateLayout: FC = () => {
  const locationData = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useSelector((state: RootState) => state.auth);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('');
  const [width, setWidth] = useState(window.innerWidth);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const pathName = locationData.pathname;
    const parts = pathName.split('/');
    setSelectedKey(parts[1]);
  }, [locationData]);

  interface IMenuItem {
    key: string;
    icon?: ReactNode;
    label: string;
    children?: IMenuItem[];
    className?: string;
    active?: string;
  }

  const IMenu: IMenuItem[] = [
    {
      key: '/',
      icon: <BarChartOutlined />,
      label: t('SIDER.DASHBOARD'),
      className: 'arrow-none',
      active: 'true',
    },
    {
      key: 'workspaces',
      icon: <BankOutlined />,
      label: t('SIDER.WORKSPACES'),
      className: 'arrow-none',
    },
    {
      key: 'users',
      icon: <AppstoreAddOutlined />,
      label: t('SIDER.APPLICATION'),
      className: 'arrow-none',
    },
    {
      key: 'devices',
      icon: <DeploymentUnitOutlined />,
      label: t('SIDER.DEVICES'),
      children: [
        {
          key: 'airconditions',
          label: t('SIDER.AIRCONDITIONS'),
        },
        {
          key: 'cameras',
          label: t('SIDER.CAMERAS'),
        },
        {
          key: 'lights',
          label: t('SIDER.LIGHTS'),
        },
      ],
    },
  ];

  useEffect(() => {
    if (width <= 768) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return (
    <>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth={120}
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={300}
          className="sider-layout"
        >
          <div className="logo-sidebar">
            <Typography.Text className="logo-content">PNV</Typography.Text>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['']}
            onClick={({ key }) => {
              navigate(key);
            }}
            items={IMenu.filter((item) => item.active !== 'false')}
            defaultOpenKeys={['devices']}
            selectedKeys={[selectedKey]}
          />
        </Sider>
        <Layout>
          <LayoutTopbar
            handleCollapsed={handleCollapsed}
            collapsed={collapsed}
          />
          <Content className="content">
            <Suspense fallback={<SpinLoading />}>
              <ProtectedRoute>
                <Col className="outlet-layout">
                  <Outlet />
                </Col>
              </ProtectedRoute>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default PrivateLayout;
/* eslint-enable prettier/prettier */
