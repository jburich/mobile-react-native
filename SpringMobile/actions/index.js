//import { createAction } from 'redux-actions';

//export const increment = createAction('INCREMENT');

export const INCREMENT = 'INCREMENT';

export function increment(count) {
    return {
        type: 'INCREMENT',
        count
    }
}


