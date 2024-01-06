import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getStorageData } from '@app/config';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@app/constants';
import { logout } from '@app/redux/features/auth/authSlice';
import { RootState } from '@app/redux/store';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();

  const accessToken = getStorageData(ACCESS_TOKEN);
  const refreshToken = getStorageData(REFRESH_TOKEN);
  if (!accessToken && !refreshToken) {
    dispatch(logout());
  }

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
