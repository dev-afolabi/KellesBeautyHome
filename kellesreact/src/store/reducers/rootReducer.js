import { combineReducers } from 'redux'
import packageReducer from './packageReducer'
import reservationReducer from './reservationReducer'

const rootReducer = combineReducers({
    package: packageReducer,
    reservation: reservationReducer
})

export default rootReducer