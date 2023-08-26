import { configureStore } from "@reduxjs/toolkit";
import dailyDealsProductSlice from "./DailyDealsProductsSlice";

const store = configureStore({
  reducer: {
    dailyDealsProducts: dailyDealsProductSlice,
  },
});

export default store;
