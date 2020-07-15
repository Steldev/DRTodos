import axios from "axios";
import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    USER_LOADED,
    USER_NOT_LOADED
} from "../types"

// Find user by token
export const userRequest = () => (dispatch, getState) => {
    axios.get('/api/auth', {
        headers: {
            'Authorization': 'Token ' + getState().account.token
        }
    })
        .then((response) => {
            dispatch({
                type: USER_LOADED,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: USER_NOT_LOADED,
                payload: Object.values(err.response.data)
            });
        });
};


// User login
export const loginRequest = (username, password) => dispatch =>
        axios.post('/api/auth/login', {
            username,
            password
        })
        .then((response) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: LOGIN_ERROR,
                payload: Object.values(err.response.data)
            });
        });


// User registration
export const registerRequest = (username, password, password2) => dispatch => {
        if (password !== password2) {
            dispatch({
                type: REGISTER_ERROR,
                payload: ["Password and confirmation password do not match"]
            });
            return;
        }
        axios.post('/api/auth/register', {
            username,
            password
        })
        .then((response) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: REGISTER_ERROR,
                payload: Object.values(err.response.data)
            });
        });
    };


// User logout
export const logoutRequest = () => (dispatch, getState) => {
    axios.post('/api/auth/logout', null, {
        headers: {
            Authorization: 'Token ' + getState().account.token
        }
    })
        .then(() => {
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        })
        .catch((err) => {
            dispatch({
                type: LOGOUT_ERROR,
                payload: Object.values(err.response.data)
            });
        });
};