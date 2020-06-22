import loadPackagesAction from '../actions/packageActions'
import loadReservationsAction from '../actions/ReservationAction';

export const loadPackages = () => async (dispatch, getState) => {
    const response = await fetch('https://localhost:5001/api/packages');
    const packages = await response.json();
    dispatch(loadPackagesAction(packages));
}

export const loadReservations = () => async (dispatch, getState) => {
    const response = await fetch('https://localhost:5001/api/reservations');
    const reservations = await response.json();

    dispatch(loadReservationsAction(reservations));
}

export default {loadPackages, loadReservations}