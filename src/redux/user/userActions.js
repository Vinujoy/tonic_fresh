import axios from 'axios'
import {
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAILURE,    
    LOGOUT,
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    FETCH_REGISTER_FAILURE
} from './userTypes'
import { userService } from '../../services';
import { alertActions } from '../alert/alertActions';
import { history } from '../../helpers/history';

export const userActions = {
    login,
    logout,
    register,
    // getAll,
    // delete: _delete
};


function login(phone_number, from) {
    return dispatch => {
        dispatch(request({ phone_number }));

        userService.login(phone_number)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push(from);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: FETCH_LOGIN_REQUEST, user } }
    function success(user) { return { type: FETCH_LOGIN_SUCCESS, user } }
    function failure(error) { return { type: FETCH_LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());     
                    console.log("sucess inside action ");              
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: FETCH_REGISTER_REQUEST, user } }
    function success(user) { return { type: FETCH_REGISTER_SUCCESS, user} }
    function failure(error) { return { type: FETCH_REGISTER_FAILURE, error } }
}


