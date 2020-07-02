 
const reservationReducer = (state=[], action) => {
    switch(action.type){
        case 'LOAD_RESERVATIONS':
            return {
                ...state,
                reservations: action.payload
            }
        default:
            return state;
    }
}

export default reservationReducer