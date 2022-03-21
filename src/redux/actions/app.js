import constants from '../dispatch-types';

export const setWindowWidth = (width) => dispatch => dispatch({ type: constants.setWindowWidth, payload: width });

export const toggleFilter = () => dispatch => dispatch({ type: constants.toggleFilter });