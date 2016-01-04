
import { combineReducers } from 'redux'
//import { handleActions } from 'redux-actions'

//const reducer = handleActions({
//    INCREMENT: (state, action) => ({
//        counter: state.counter + action.payload
//    }),
//
//    DECREMENT: (state, action) => ({
//        counter: state.counter - action.payload
//    })
//}, { counter: 0 });



function incrementer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

const reducer = combineReducers({
    incrementer
});

export default reducer;