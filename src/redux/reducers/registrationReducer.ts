import {combineReducers} from "redux";
import {
    REGISTRATION_SET_ERRORS,
    REGISTRATION_SET_FIELD,
    REGISTRATION_SET_LOGGED_IN,
    REGISTRATION_CLEAR_FORM,
    RegistrationAction
} from "../actions/registrationAction";

const errors = (state:object = {}, action: RegistrationAction): object => {
    switch (action.type) {
        case REGISTRATION_SET_ERRORS:
            return action.errors;
        case REGISTRATION_SET_LOGGED_IN:
            return {};
        case REGISTRATION_CLEAR_FORM:
            return {};
        default:
            return state;
    }
};

const fields = (state:object = {}, action: RegistrationAction): object => {
    switch (action.type) {
        case REGISTRATION_SET_FIELD:
            return {...state, [action.field.name]: action.field.value};
        case REGISTRATION_SET_LOGGED_IN:
            return action.fields;
        case REGISTRATION_CLEAR_FORM:
            return action.fields;
        default:
            return state;
    }
}

const isLogged = (state:boolean = false, action: RegistrationAction):boolean => {
    switch (action.type) {
        case REGISTRATION_SET_LOGGED_IN:
            return true;
        case REGISTRATION_SET_ERRORS:
            return false;
        case REGISTRATION_CLEAR_FORM:
            return false;
        default:
            return state;
    }
}


export const registrationReducer = combineReducers({
    errors,
    fields,
    isLogged,
});