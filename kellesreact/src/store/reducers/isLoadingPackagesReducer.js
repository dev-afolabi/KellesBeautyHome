import { 
    LOAD_PACKAGES_IN_PROGRESS, 
    LOAD_PACKAGES_SUCCESS, 
    LOAD_PACKAGES_FAILURE 
} from "../actions/packageActions";

export const isLoadingPackages = (state=false, action) => {
    const { type } = action;
    switch(type){
        case LOAD_PACKAGES_IN_PROGRESS:
            return true
        case LOAD_PACKAGES_SUCCESS:
        case LOAD_PACKAGES_FAILURE:
            return false
        default:
            return state
    }
}
export default isLoadingPackages;