import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./translations";

const store = configureStore({
  reducer: {
    lang: langReducer,
  }
});

export default store;