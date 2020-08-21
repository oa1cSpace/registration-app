import {combineReducers} from "redux";
import {userRowsReducer} from "./userRowsReducer";
import {loginReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReducer";

export const rootReducers = combineReducers({
    rows: userRowsReducer,
    registration: registrationReducer,
    login: loginReducer,
});



