import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {loginReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReducer";

export const rootReducers = combineReducers({
    users: usersReducer,
    registration: registrationReducer,
    login: loginReducer,
});



