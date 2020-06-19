import { combineReducers } from 'redux'
import packageReducer from './packageReducer'

const rootReducer = combineReducers({
    package: packageReducer, 
})

export default rootReducer