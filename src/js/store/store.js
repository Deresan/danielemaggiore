import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./translations";
import navigationReducer from "./navigation";

const store = configureStore({
  reducer: {
    lang: langReducer,
    navigation: navigationReducer,
  }
});

export default store;