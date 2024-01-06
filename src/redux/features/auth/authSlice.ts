import { createSlice } from '@reduxjs/toolkit';

import { getStorageData } from '@app/config';
import { ACCESS_TOKEN } from '@app/constants';

interface User {
  id: string;
  fullName: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  isAuth: boolean;
  user: User | null;
}

const checkAuth = (): boolean => Boolean(getStorageData(ACCESS_TOKEN));

const initialState: AuthState = {
  isAuth: checkAuth(),
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, _action) {
      state.isAuth = true;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.isAuth = false;
      state.user = null;
    },
  },
});

const { reducer, actions } = authSlice;

export const { logout, login, setUser } = actions;

export default reducer;
