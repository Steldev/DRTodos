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

const initialState = {
    todos: null,
    errors: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TODOS_LOADED:
            return { ...state, todos: action.payload};
        case CREATE_SUCCESS:
            return { ...state, todos: state.todos.concat(action.payload)};
        case SET_DONE_SUCCESS:
            return { ...state, todos: state.todos.map(current => {
                    if (current.id === action.payload.id) {
                        current["is_done"] = action.payload.is_done;
                        return current
                    }
                    return current;
                })
            };
        case DELETE_SUCCESS:
            return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload)};
        case TODOS_NOT_LOADED:
        case CREATE_ERROR:
        case SET_DONE_ERROR:
        case DELETE_ERROR:
            return { ...state, errors: state.todos.concat(action.payload)};
        default:
            return state;
    }
}