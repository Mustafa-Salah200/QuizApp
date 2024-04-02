import { createSlice } from "@reduxjs/toolkit";
import Questions from "../../Data/Quetions.json";

const quetionSlice = createSlice({
  initialState: {
    Type: [
      Questions.Different_Quetions,
      Questions.Countries_Quetions,
      Questions.FootBall_Quetions,
      Questions.Programming_Quetions,
      Questions.Math_Quetions,
      Questions.English_Quetions,
    ],
    Active_Type: null,
    Active_Question: null,
    User_Answer: null,
    Count_Of_question: 1,
    Count_Of_right: 0,
  },
  name: "quetionSlice",
  reducers: {
    active_question: (state, action) => {
      state.Active_Question = action.payload;
    },
    active_type: (state, action) => {
      state.Active_Type = action.payload;
    },
    count_of_question: (state, action) => {
      state.Count_Of_question++;
    },
    Clear_count: (state, action) => {
      state.Count_Of_question = 1;
    },
    count_of_right: (state, action) => {
      state.Count_Of_right++;
    },
    Clear_right: (state, action) => {
      state.Count_Of_right = 0;
    },
  },
});
export const {
  active_question,
  active_type,
  count_of_question,
  count_of_right,
  Clear_count,
  Clear_right,
} = quetionSlice.actions;
export default quetionSlice.reducer;
