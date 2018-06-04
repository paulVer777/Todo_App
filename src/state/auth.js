import {auth, googleProvider, database} from '../firebase'
import {getTasksFromDb} from "./todo";
import {getQuoteFromDb} from "./quote";

const LOGGEDIN = 'auth/LOGGEDIN';
const LOGGEDOUT = 'auth/LOGGEDOUT';

const loggedIn = (user) => ({type: LOGGEDIN, user});
export const loggedOut = () => ({type: LOGGEDOUT});

const initialState = {

    isUserLoggedIn: false,
    user: null
}


export const initAuthUserSync = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        user => {
            if (user) {
                dispatch(loggedIn(user))
                dispatch(getTasksFromDb())
                dispatch(getQuoteFromDb())
            }
            else
                dispatch(loggedOut())
        }
    )
}

export const logInByGoogle = () => (dispatch, getState) => {
    auth.signInWithRedirect(googleProvider)
}


export default (state = initialState, action) => {
    switch (action.type) {
        case LOGGEDIN:
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.user
            };
        case LOGGEDOUT:
            return {
                ...state,
                isUserLoggedIn: false,
                user: null
            };
        default:
            return state
    }
}


