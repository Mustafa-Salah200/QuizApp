import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  initialState: {
    user: null,
  },
  name: "userSlice",
  reducers: {
    setuser: (state, action) => {
      state.user = action.payload;
    },
    clearuser: (state, action) => {
      state.user = null;
    },
  },
});
export const { setuser, clearuser } = userSlice.actions;
export default userSlice.reducer;
