const LOAD_PACKAGES = 'LOAD_PACKAGES'
const loadPackagesAction = packages => ({
    type: LOAD_PACKAGES,
    payload: packages,
}); 

export default loadPackagesAction
