import { createSlice } from "@reduxjs/toolkit";

const initialModalState = { modalItems: [], isShowModal: false, genre: null };

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    toggleModal: (state) => {
      state.isShowModal = !state.isShowModal;
    },

    loadGames: (state, action) => {
      state.modalItems = action.payload;
    },

    getGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
