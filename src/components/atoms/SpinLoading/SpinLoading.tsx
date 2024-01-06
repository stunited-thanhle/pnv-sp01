import { Spin } from 'antd';
import React from 'react';

import './SpinLoading.scss';
import { getStorageData } from '@config/storage';
import { ACCESS_TOKEN } from '@constants';

export const SpinLoading: React.FC = () => {
  const accessToken = getStorageData(ACCESS_TOKEN);

  if (!accessToken) {
    window.location.href = `${location.origin}/login`;
  }
  return (
    <div className="spin">
      <Spin size="large" />
    </div>
  );
};
