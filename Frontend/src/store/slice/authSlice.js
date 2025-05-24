import { createSlice } from "@reduxjs/toolkit";

let storedUser;
try {
  const raw = localStorage.getItem("user");
  storedUser = raw && raw !== "undefined" ? JSON.parse(raw) : null;
} catch {
  storedUser = null;
}

const initialState = {
  user: storedUser,
  isAuthenticated: !!storedUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload)); // ✅ Save on login
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user"); // ✅ Remove on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
