const LOAD_RESERVATIONS = 'LOAD_RESERVATIONS'
const loadReservationsAction = reservations => ({
    type: LOAD_RESERVATIONS,
    payload: reservations,
}); 

export default loadReservationsAction