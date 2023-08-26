import { configureStore } from "@reduxjs/toolkit";
import dailyDealsProductSlice from "./DailyDealsProductsSlice";
import BestSellerProductSlice from "./BestSellerProductSlice";

const store = configureStore({
  reducer: {
    dailyDealsProducts: dailyDealsProductSlice,
    bestsellerProducts : BestSellerProductSlice
  },
});

export default store;
