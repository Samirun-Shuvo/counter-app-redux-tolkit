import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/Counter/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;