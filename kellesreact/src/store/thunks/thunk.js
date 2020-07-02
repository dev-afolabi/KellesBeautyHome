import { loadPackagesFailure, loadPackagesInProgress, loadPackagesSuccess } from '../actions/packageActions'
import {loadReservationsInProgress,loadReservationsSuccess,loadReservationsFailure} from '../actions/ReservationAction';

export const loadPackages = () => async (dispatch, getState) => {
    try{
        dispatch(loadPackagesInProgress());
        const response = await fetch('https://localhost:5001/api/packages');
        const packages = await response.json();
        dispatch(loadPackagesSuccess(packages));
    }catch(e){
        dispatch(loadPackagesFailure());
    }
    
}

export const loadReservations = () => async (dispatch, getState) => {
    try{
        dispatch(loadReservationsInProgress());
        const response = await fetch('https://localhost:5001/api/reservations');
        const reservations = await response.json();
        dispatch(loadReservationsSuccess(reservations));
    }catch(e){
        dispatch(loadReservationsFailure());
    }
}
