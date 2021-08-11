import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,
    LOGOUT,
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE
} from './userTypes';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case FETCH_LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case FETCH_LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case FETCH_LOGIN_FAILURE:
            return {};
        case LOGOUT:
            return {};
        default:
            return state
    }
}



export function registration(state = {}, action) {
    switch (action.type) {
        case FETCH_REGISTER_REQUEST:
            return { registering: true };
        case FETCH_REGISTER_SUCCESS:
            return {};
        case FETCH_REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}