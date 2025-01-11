import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout, fetchCurrentUser } from './auth-operations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        register.fulfilled,
        (state, { payload: { token, name, email, id } }) => {
          state.user = { name, email, id };
          state.token = token;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(register.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(
        login.fulfilled,
        (state, { payload: { userName, userEmail, userToken, userId } }) => {
          state.user = { name: userName, email: userEmail, id: userId };
          state.token = userToken;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(login.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = null;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
        state.isFetchingCurrentUser = true;
      })
      .addCase(
        fetchCurrentUser.fulfilled,
        (state, { payload: { name, email, token, id } }) => {
          state.user = { name, email, id };
          state.token = token;
          state.isFetchingCurrentUser = false;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.isFetchingCurrentUser = false;
      })
      .addMatcher(
        isAnyOf(register.pending, login.pending, logout.pending),
        state => {
          state.isLoading = true;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
