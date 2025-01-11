import { createAsyncThunk } from '@reduxjs/toolkit';
import Parse from 'parse/dist/parse.min.js';

export const register = createAsyncThunk('auth/register', user => {
  const token = user.getSessionToken();
  const name = user.getUsername();
  const email = user.getEmail();
  const id = user._getId();

  return { token, name, email, id };
});

export const login = createAsyncThunk(
  'auth/login',

  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const user = await Parse.User.logIn(username, password, { email });
      const userToken = user.getSessionToken();
      const userName = user.getUsername();
      const userEmail = user.getEmail();
      const userId = user._getId();

      return { userName, userEmail, userToken, userId };
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await Parse.User.logOut();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue }) => {
    try {
      const currentUser = await Parse.User.current();

      if (!currentUser) {
        // eslint-disable-next-line
        throw 'NOT CURRENT USER';
      }

      const name = currentUser.getUsername();
      const email = currentUser.getEmail();
      const token = currentUser.getSessionToken();
      const id = currentUser._getId();

      return { name, email, token, id };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
