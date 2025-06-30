import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  session: null,
  isLoading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload?.user || null
      state.session = action.payload?.session || null
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    logout: (state) => {
      state.user = null
      state.session = null
    }
  }
})

export const { setUser, setLoading, logout } = authSlice.actions
export default authSlice.reducer