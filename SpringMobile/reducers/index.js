import { combineReducers } from 'redux'

import incrementer from './incrementer'

const reducer = combineReducers({
    incrementer
});

export default reducer;