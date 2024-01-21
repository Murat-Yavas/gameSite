import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./game-slice";
import modalSlice from "./modal-slice";

export const store = configureStore({
  reducer: { game: gameSlice.reducer, modal: modalSlice.reducer },
});
