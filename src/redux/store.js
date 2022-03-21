import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers';

const persistConfig = {
    key: `axie-infinity-storage`,
    storage,
};

const persist = persistReducer(persistConfig, rootReducer);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export const store = createStoreWithMiddleware(persist);
export const persistor = persistStore(store);