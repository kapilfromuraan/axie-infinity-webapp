import constants from '../dispatch-types'

let initialMarketPlace = {
    axies: [],
}

const userReducer = (state = initialMarketPlace, action) => {
    switch (action.type) {
        case constants.setAxies:
            return { ...state, axies: action.payload };
        default:
            return state;
    }
}

export default userReducer;