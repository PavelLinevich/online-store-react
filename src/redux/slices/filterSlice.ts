import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface filterSliceState {
  searchValue: string;
  activeCategory: number;
  currentPage: number;
  selected: number;
  selectedList: string;
}

const initialState: filterSliceState = {
  searchValue: '',
  activeCategory: 0,
  currentPage: 1,
  selected: 0,
  selectedList: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<number>) {
      state.activeCategory = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSelected(state, action: PayloadAction<number>) {
      state.selected = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<filterSliceState>) {
      state.selectedList = action.payload.selectedList;
      state.currentPage = Number(action.payload.currentPage);
      state.activeCategory = Number(action.payload.activeCategory);
    },
  },
})

export const selectFilter = (state: RootState) => state.filter;

export const selectCurrentPage = (state: RootState) => state.filter.currentPage;

export const selectSort = (state: RootState) => state.filter.selected;

export const { setActiveCategory, setSearchValue, setSelected, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;