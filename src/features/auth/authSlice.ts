import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  name: string;
  picture: string;
}

const initialState: User | null = null;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
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