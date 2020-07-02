export const LOAD_PACKAGES_IN_PROGRESS = 'LOAD_PACKAGES_IN_PROGRESS'
export const loadPackagesInProgress = () =>({
    type: LOAD_PACKAGES_IN_PROGRESS
})

export const LOAD_PACKAGES_SUCCESS  = 'LOAD_PACKAGES_SUCCESS'
export const loadPackagesSuccess = packages => ({
    type: LOAD_PACKAGES_SUCCESS,
    payload: {packages},
}); 

export const LOAD_PACKAGES_FAILURE = 'LOAD_PACKAGES_FAILURE'
export const loadPackagesFailure = () => ({
    type: LOAD_PACKAGES_FAILURE
})