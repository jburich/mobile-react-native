import { createAction } from 'redux-actions';

export const INCREMENT = 'INCREMENT';
export const increment = createAction(INCREMENT);

export const DECREMENT = 'DECREMENT';
export const decrement = createAction(DECREMENT);
