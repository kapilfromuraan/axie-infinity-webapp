import constants from '../dispatch-types'

let initialMarketPlace = {
    isMobileDevice: window.innerWidth < 768,
    isFilterOpen: false
}

const appReducer = (state = initialMarketPlace, action) => {
    switch (action.type) {
        case constants.setWindowWidth:
            return { ...state, isMobileDevice: action.payload < 768 };
        case constants.toggleFilter:
            return {...state, isFilterOpen: !state.isFilterOpen}
        default:
            return state;
    }
}

export default appReducer;