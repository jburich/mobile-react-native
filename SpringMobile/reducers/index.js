import { combineReducers } from 'redux'

import incrementer from './incrementer'
import merchants from './merchants'

const reducer = combineReducers({
    incrementer,
    merchants
});

export default reducer;