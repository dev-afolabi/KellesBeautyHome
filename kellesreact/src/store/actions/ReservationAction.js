export const LOAD_RESERVATIONS_IN_PROGRESS = 'LOAD_RESERVATIONS_IN_PROGRESS'
export const loadReservationsInProgress = () =>({
    type: LOAD_RESERVATIONS_IN_PROGRESS
})

export const LOAD_RESERVATIONS_SUCCESS  = 'LOAD_RESERVATIONS_SUCCESS'
export const loadReservationsSuccess = reservations => ({
    type: LOAD_RESERVATIONS_SUCCESS,
    payload: {reservations},
}); 

export const LOAD_RESERVATIONS_FAILURE = 'LOAD_RESERVATIONS_FAILURE'
export const loadReservationsFailure = () => ({
    type: LOAD_RESERVATIONS_FAILURE
})
