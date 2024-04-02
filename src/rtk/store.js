import { configureStore } from "@reduxjs/toolkit";
import quetionSlice from "./slice/Quetion-slice";
import UserSlice from "./slice/User-slice";

export const store = configureStore({
  reducer: {
    quetions: quetionSlice,
    user: UserSlice,
  },
});
