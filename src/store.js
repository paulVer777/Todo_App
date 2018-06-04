import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import todo from './state/todo'
import auth from './state/auth'
import thunk from 'redux-thunk'
import {initAuthUserSync} from "./state/auth";

const reducer=combineReducers({

    auth,
    todo
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk))
);


store.dispatch(initAuthUserSync())