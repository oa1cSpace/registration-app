import {combineReducers} from "redux";
import {
    LOGIN_SET_ERRORS,
    LOGIN_SET_FIELD,
    LOGIN_SET_LOGGED_IN,
    LOGIN_CLEAR_FORM
} from "../actions/login";

const errors = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_SET_ERRORS:
            return action.errors;
        case LOGIN_SET_LOGGED_IN:
            return {};
        case LOGIN_CLEAR_FORM:
            return {};
        default:
            return state;
    }
};

const fields = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_SET_FIELD:
            return {...state, [action.field.name]: action.field.value};
        case LOGIN_SET_LOGGED_IN:
            return action.fields;
        case LOGIN_CLEAR_FORM:
            return action.fields;
        default:
            return state;
    }
}

const isLogged = (state = false, action) => {
    switch (action.type) {
        case LOGIN_SET_LOGGED_IN:
            return true;
        case LOGIN_SET_ERRORS:
            return false;
        case LOGIN_CLEAR_FORM:
            return false;
        default:
            return state;
    }
}


export const loginReducer = combineReducers({
    errors,
    fields,
    isLogged,
});