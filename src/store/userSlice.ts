import { createSlice } from "@reduxjs/toolkit";

interface User {
  email: string;
  name: string;
  picture: string;
}

const initialState: User | null = localStorage.getItem("user") 
  ? JSON.parse(localStorage.getItem("user")!) 
  : null;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    setUser(_state, action) {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    },
    logout() {
      localStorage.removeItem("user");
      return null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;