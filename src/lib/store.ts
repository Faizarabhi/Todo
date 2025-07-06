import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../store/userSlice';

const preloadedState = () => {
  const userData = localStorage.getItem("user");
  return { user: userData ? JSON.parse(userData) : null };
};

const store = configureStore({
  reducer: {
    user: userReducer, 
  },
  preloadedState: preloadedState()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;