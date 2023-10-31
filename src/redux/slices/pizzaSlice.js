import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params, thunkAPI) => {
    const { category, search, selectedList, currentPage } = params
    const { data } = await axios.get(
      `https://65367de8bb226bb85dd23593.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${selectedList}&${search}`
    )

    return data
  }
)
const initialState = {
  items: [],
  status: 'loading', // loading| success | error
  // const [isLoading, setIsLoading] = React.useState(true);
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.items = []
      state.status = 'error'
    },
  },
})

export const selectPizzaData = (state) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
