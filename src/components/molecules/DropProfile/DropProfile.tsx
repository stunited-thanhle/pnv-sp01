import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Row, Typography } from 'antd';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { removeStorageData } from '@app/config';
import { ACCESS_TOKEN } from '@app/constants';

import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';
import './DropProfile.scss';

export const DropProfile: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { user } = useSelector((state: RootState) => state.auth);
  const [activeItem, setActiveItem] = useState<boolean>(false);

  const handleUser = async (key: string) => {
    if (key == 'profile') {
      navigate('/profile');
    }
    if (key == 'logout') {
      removeStorageData(ACCESS_TOKEN);
      localStorage.clear();
      navigate('/login');
    }
  };

  const itemsMenu: MenuProps['items'] = [
    {
      label: (
        <Typography style={{ color: '#121212', fontWeight: 600 }}>
          {t('DROPDOWN_PROFILE.PROFILE')}
        </Typography>
      ),
      key: 'profile',
      className: 'item-profile',
    },
    {
      label: (
        <Typography style={{ color: '#FB303E', fontWeight: 600 }}>
          {t('DROPDOWN_PROFILE.SIGN_OUT')}
        </Typography>
      ),
      key: 'logout',
      danger: true,
      className: 'item-signout',
    },
  ];

  const items: MenuProps['items'] = itemsMenu.filter((item) => {
    return item;
  });

  return (
    <Dropdown
      menu={{
        items,
        onClick: (item) => {
          handleUser(item.key), setActiveItem(!activeItem);
        },
      }}
      trigger={['click']}
      className="profile-dropdown"
      overlayClassName="profile-menu"
      placement="bottom"
      onOpenChange={() => setActiveItem(!activeItem)}
    >
      <Row>
        <Typography.Text className="drop-name font-bold text-[#5646ff]">
          {user?.workspace && `${user.workspace.name}`}
        </Typography.Text>
        <Typography.Text className="drop-name">
          {user
            ? `${user.firstName} ${user.lastName}`
            : t('DROPDOWN_PROFILE.USER')}
          {activeItem === true ? (
            <CaretUpOutlined className="drop-icon" />
          ) : (
            <CaretDownOutlined className="drop-icon" />
          )}
        </Typography.Text>
      </Row>
    </Dropdown>
  );
};
