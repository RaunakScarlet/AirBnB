import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice";

const AppStore = configureStore({
    reducer: {
        userInfo: userReducer,
    },
});

export default AppStore;
