export const LOGIN_SET_ERRORS = '[login] set errors';
export const LOGIN_SET_FIELD = '[login] set field';
export const LOGIN_SET_LOGGED_IN = '[login] set logged in';
export const LOGIN_CLEAR_FORM = '[login] clear form';

export const setErrors = (errors) => {
    return {
        type: LOGIN_SET_ERRORS,
        errors
    }
};

export const setField = (field) => {
    return {
        type: LOGIN_SET_FIELD,
        field
    }
};

export const setLoggedIn = () => {
    return {
        type: LOGIN_SET_LOGGED_IN,
    }
};

export const clearForm = (fields) => {
    return {
        type: LOGIN_CLEAR_FORM,
        fields
    }
};
