import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement, incrementByAmount } from '../actions/counter';

// initial state
const initialState = {
  value: 0,
};

// reducer to handle actions
export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value += 1;  // Increment value by 1
    })
    .addCase(decrement, (state) => {
      state.value -= 1;  // Decrement value by 1
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;  // Increment by a specific amount
    });
});

export default counterReducer;
