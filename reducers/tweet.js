import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { content: null, username: null },
};

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    addTweetToDatabase: (state, action) => {
      state.value.content = action.payload;
    },
    removeTweetToDatabase: (state) => {
      state.value = {};
    },
  },
});

export const { addTweetToDatabase } = tweetSlice.actions;
export default tweetSlice.reducer;
