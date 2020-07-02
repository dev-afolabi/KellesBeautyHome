import { combineReducers } from 'redux'
import packageReducer from './packageReducer'
import reservationReducer from './reservationReducer'
import isLoadingPackagesReducer from './isLoadingPackagesReducer'

const rootReducer = combineReducers({
    package: packageReducer,
    reservation: reservationReducer,
    isloadingPackages : isLoadingPackagesReducer,
})

export default rootReducer