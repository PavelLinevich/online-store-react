import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  activeCategory: 0,
  currentPage: 1,
  selected: 0,
  selectedList: '',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSelected(state, action) {
      state.selected = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.selectedList = action.payload.selectedList;
      state.currentPage = Number(action.payload.currentPage);
      state.activeCategory = Number(action.payload.activeCategory);
    },
  },
})

export const selectFilter = (state) => state.filter;

export const selectSort = (state) => state.filter.selected;

export const { setActiveCategory, setSearchValue, setSelected, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;