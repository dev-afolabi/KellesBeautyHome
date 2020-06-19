import loadPackagesAction from '../actions/packageActions'

export const loadPackages = () => async (dispatch, getState) => {
    const response = await fetch('https://localhost:5001/api/packages');
    const packages = await response.json();
    dispatch(loadPackagesAction(packages));
}

export default loadPackages