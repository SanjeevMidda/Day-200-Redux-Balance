// using redux's 'createSlice' to begin creating our reducers
import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
    name: "balance",

        // initial value of our state at run-time
        initialState: {
            value:0,
        },

    // all actions our user can do in the app
    reducers: {

        // user can add money into their account
        deposit: (state, handleSubmit) =>  {
            state.value = state.value + handleSubmit;
        },

        // user can withdraw money from their account
        withdraw: (state, handleSubmit) => {
            state.value = state.value - handleSubmit;
        },

        // user can calculate the interest on their balance
        addInterest: (state) => {
            state.value += (state.value/100) * 5;
        },

        // user can calculate the interest on their balance
        charges: (state) => {
            state.value -= (state.value/100) *15;
        },

        // calculation different if user adds funds to their account
        changeByAmountAdd: (state, action) => {
            state.value += action.payload;
        },

        // calculation different if they withdraw funds from their account
        changeByAmountWithdraw: (state, action) => {
            state.value -= action.payload;
        },
    },
});

// exporting our reducers to be used elsewhere in our code
export const {deposit, withdraw, addInterest, charges, changeByAmountAdd, changeByAmountWithdraw} = balanceSlice.actions;

export default balanceSlice.reducer;