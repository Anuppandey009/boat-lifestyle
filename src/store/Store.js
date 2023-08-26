import { configureStore } from "@reduxjs/toolkit";
import dailyDealsProductSlice from "./DailyDealsProductsSlice";
import CartSlice from "./CartSlice";
import BestSellerProductSlice from "./BestSellerProductSlice";

const store = configureStore({
  reducer: {
    dailyDealsProducts: dailyDealsProductSlice,
    bestsellerProducts : BestSellerProductSlice,
    cart:CartSlice
  },
});

export default store;
