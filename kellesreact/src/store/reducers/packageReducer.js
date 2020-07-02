import { 
    LOAD_PACKAGES_IN_PROGRESS, 
    LOAD_PACKAGES_SUCCESS, 
    LOAD_PACKAGES_FAILURE 
} from "../actions/packageActions";


const packageReducer = (state=[], action) => {
    const {type, payload} = action;

    switch(type){
        case LOAD_PACKAGES_SUCCESS:{
            const { packages } = payload;
            return packages
        }
        case LOAD_PACKAGES_IN_PROGRESS:
        case LOAD_PACKAGES_FAILURE:
        default:
            return state;
    }
}

export default packageReducer