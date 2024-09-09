import { createAction } from '@reduxjs/toolkit';

// counter actions
export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const incrementByAmount = createAction('counter/incrementByAmount');
