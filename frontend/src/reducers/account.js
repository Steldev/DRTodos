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

const initialState = {
    user: null,
    token: localStorage.getItem('token'),
    isAuth: false,
    errors: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADED:
            return { ...state, user: action.payload.user, isAuth: true };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return { ...state, user: action.payload.user, token: action.payload.token, isAuth: true, errors: null };
        case LOGIN_ERROR:
        case REGISTER_ERROR:
        case USER_NOT_LOADED:
            return { ...state, isAuth: false, errors: action.payload };
        case LOGOUT_ERROR:
            return { ...state, errors: action.payload };
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            location.reload();
        default:
            return state;
    }
}