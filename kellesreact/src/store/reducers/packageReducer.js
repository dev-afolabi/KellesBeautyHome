const packageReducer = (state=[], action) => {
    switch(action.type){
        case 'LOAD_PACKAGES':
            return {
                ...state,
                packages: action.payload
            }
        default:
            return state;
    }
}

export default packageReducer