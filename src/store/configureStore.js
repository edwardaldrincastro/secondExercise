import { createStore, combineReducers } from 'redux';

import singUpReducers from './reducers/signUp';

const rootReducer = combineReducers({
    signUp: singUpReducers
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;