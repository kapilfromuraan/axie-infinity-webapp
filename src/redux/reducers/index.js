import { combineReducers } from "redux";
import marketPlaceReducer from './marketplace';
import appReducer from './app';

const rootReducer = combineReducers({
    marketPlace: marketPlaceReducer,
    appDetails: appReducer
});

export default rootReducer;