import {InputInterface} from "../../Interfaces/InputInterface";

export const LOGIN_SET_ERRORS = '[login] set errors';
export const LOGIN_SET_FIELD = '[login] set field';
export const LOGIN_SET_LOGGED_IN = '[login] set logged in';
export const LOGIN_CLEAR_FORM = '[login] clear form';

function inferLiteralFromString<T extends string>(arg: T): T {
    return arg;
}

export const setErrors = (errors: object) => {
    return {
        type: inferLiteralFromString(LOGIN_SET_ERRORS) ,
        errors,
    }
};

export const setField = (field: HTMLTextAreaElement) => {
    return {
        type: inferLiteralFromString(LOGIN_SET_FIELD),
        field,
    }
};

export const setLoggedIn = (fields: InputInterface) => {
    return {
        type: inferLiteralFromString(LOGIN_SET_LOGGED_IN),
        fields,
    }
};

export const clearForm = (fields: InputInterface) => {
    return {
        type: inferLiteralFromString(LOGIN_CLEAR_FORM),
        fields,
    }
};

export type LoginAction =
    ReturnType<typeof setErrors> |
    ReturnType<typeof setField> |
    ReturnType<typeof setLoggedIn> |
    ReturnType<typeof clearForm>;
