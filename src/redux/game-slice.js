import { createSlice } from "@reduxjs/toolkit";

const initialGameState = { items: [], isShow: false };

const gameSlice = createSlice({
  name: "game",
  initialState: initialGameState,
  reducers: {
    getGames: (state, action) => {
      state.items = action.payload;
    },

    openModal: (state) => {
      state.isShow = !state.isShow;
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice;
