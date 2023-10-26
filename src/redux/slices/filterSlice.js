import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  selected: 0,
  currentPage: 1,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setSelected(state, action) {
      state.selected = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
})
export const { setActiveCategory, setSelected, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;