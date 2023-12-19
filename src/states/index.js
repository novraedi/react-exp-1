import { configureStore } from "@reduxjs/toolkit";
import threadReducer from "./thread/reducer";
import authUserReducer from "./authUser/reducer";
import usersReducer from "./users/reducer";
import isPreloadReducer from "./isPreload/reducer";
import { loadingBarReducer } from "react-redux-loading-bar";

const store = configureStore({
  reducer: {
    threads: threadReducer,
    authUser: authUserReducer,
    users: usersReducer,
    isPreload: isPreloadReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
