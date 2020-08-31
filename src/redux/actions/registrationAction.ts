import {InputInterface} from "../../Interfaces/InputInterface";

export const REGISTRATION_SET_ERRORS = '[registration] set errors';
export const REGISTRATION_SET_FIELD = '[registration] set field';
export const REGISTRATION_SET_LOGGED_IN = '[registration] set logged in';
export const REGISTRATION_CLEAR_FORM = '[registration] clear form';

// function inferLiteralFromString<T extends string>(arg: T): T {
//     return arg;
// }
//
// export const setErrors = (errors: object) => {
//     return {
//         type: inferLiteralFromString(REGISTRATION_SET_ERRORS),
//         errors,
//     }
// };
//
// export const setField = (field: HTMLTextAreaElement) => {
//     return {
//         type: inferLiteralFromString(REGISTRATION_SET_FIELD),
//         field,
//     }
// };
//
// export const setLoggedIn = (fields: InputInterface) => {
//     return {
//         type: inferLiteralFromString(REGISTRATION_SET_LOGGED_IN),
//         fields,
//     }
// };
//
// export const clearForm = (fields: InputInterface) => {
//     return {
//         type: inferLiteralFromString(REGISTRATION_CLEAR_FORM),
//         fields,
//     }
// };
//
// export type RegistrationAction =
//     ReturnType<typeof setErrors> |
//     ReturnType<typeof setField> |
//     ReturnType<typeof setLoggedIn> |
//     ReturnType<typeof clearForm>;


export const setErrors = (errors: object) => (<const>{
        type: REGISTRATION_SET_ERRORS,
        errors,
});

export const setField = (field: HTMLTextAreaElement) => (<const>{
        type: REGISTRATION_SET_FIELD,
        field,
});

export const setLoggedIn = (fields: InputInterface) => (<const>{
        type: REGISTRATION_SET_LOGGED_IN,
        fields,
});

export const clearForm = (fields: InputInterface) => (<const>{
        type: REGISTRATION_CLEAR_FORM,
        fields,
});

export type RegistrationAction =
    ReturnType<typeof setErrors> |
    ReturnType<typeof setField> |
    ReturnType<typeof setLoggedIn> |
    ReturnType<typeof clearForm>;