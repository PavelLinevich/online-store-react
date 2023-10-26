import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  selected: 0,
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
  },
})
export const { setActiveCategory, setSelected } = filterSlice.actions;

export default filterSlice.reducer;