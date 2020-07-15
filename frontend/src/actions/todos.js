import axios from "axios";
import {
    TODOS_LOADED,
    TODOS_NOT_LOADED,
    CREATE_SUCCESS,
    CREATE_ERROR,
    DELETE_SUCCESS,
    DELETE_ERROR,
    SET_DONE_SUCCESS,
    SET_DONE_ERROR
} from "../types";


// Get todos
export const todosRequest = () => (dispatch, getState) => {
    axios.get('/api/todos/', {
        headers: {
            Authorization: 'Token ' + getState().account.token
        }
    })
        .then((response) => {
            dispatch({
                type: TODOS_LOADED,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: TODOS_NOT_LOADED,
                payload: Object.values(err.response.data)
            });
        });
};


// Create new _todo
export const createRequest = (text) => (dispatch, getState) => {
    axios.post('/api/todos/', {text}, {
        headers: {
            Authorization: 'Token ' + getState().account.token
        }
    })
        .then((response) => {
            dispatch({
                type: CREATE_SUCCESS,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: CREATE_ERROR,
                payload: Object.values(err.response.data)
            });
        });
};


// Set done _todo
export const setDoneRequest = (id, value) => (dispatch, getState) => {
    axios.patch(`/api/todos/${id}/`,{is_done: value}, {
        headers: {
            Authorization: 'Token ' + getState().account.token
        }
    })
        .then((response) => {
            dispatch({
                type: SET_DONE_SUCCESS,
                payload: response.data
            });
        })
        .catch((err) => {
            dispatch({
                type: SET_DONE_ERROR,
                payload: Object.values(err.response.data)
            });
        });
};


// Delete _todo
export const deleteRequest = (id) => (dispatch, getState) => {
    axios.delete(`/api/todos/${id}/`, {
        headers: {
            Authorization: 'Token ' + getState().account.token
        }
    })
        .then(() => {
            dispatch({
                type: DELETE_SUCCESS,
                payload: id
            });
        })
        .catch((err) => {
            dispatch({
                type: DELETE_ERROR,
                payload: Object.values(err.response.data)
            });
        });
};