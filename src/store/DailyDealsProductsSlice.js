
import axios from "axios";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  data: [],
};

const dailyDealsProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProducts(state, actions) {
      state.data = actions.payload;
    },
  },
});

export const { fetchProducts } = dailyDealsProductSlice.actions;
export default dailyDealsProductSlice.reducer;

export function getProducts() {
  return async function getProductsThunk(dispatch, state) {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;
    dispatch(fetchProducts(data));
  };
}
