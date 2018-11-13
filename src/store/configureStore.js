import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import signUpReducers from './reducers/signUp';
import addPlaceReducers from './reducers/addPlace';

const rootReducer = combineReducers({
    signUp: signUpReducers,
    addPlace: addPlaceReducers
});

let composeEnhancers =  compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;