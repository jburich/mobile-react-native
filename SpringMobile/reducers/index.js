import { combineReducers } from 'redux'

import incrementer from './incrementer'
import merchants from './merchants'
import currentLocation from './location'

const reducer = combineReducers({
    incrementer,
    merchants,
    currentLocation
});

export default reducer;