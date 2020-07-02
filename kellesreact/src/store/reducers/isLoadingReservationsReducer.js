import {
    LOAD_RESERVATIONS_IN_PROGRESS,
    LOAD_RESERVATIONS_SUCCESS,
    LOAD_RESERVATIONS_FAILURE
} from '../actions/ReservationAction'


const isLoadingReservations = (state=false, action) => {
    const { type } = action;

    switch(type){
        case LOAD_RESERVATIONS_IN_PROGRESS:
            return true;
        case LOAD_RESERVATIONS_SUCCESS:
        case LOAD_RESERVATIONS_FAILURE:
            return false;
        default:
            return state;
    }
}
export default isLoadingReservations;
