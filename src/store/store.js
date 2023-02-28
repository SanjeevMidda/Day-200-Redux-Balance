import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balance";

// configuring our redux store with a reference to our reducers in our 'balance.js' file
export default configureStore({
    reducer: {
        balance: balanceReducer,
    },
});

