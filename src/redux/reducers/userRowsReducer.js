import {combineReducers} from "redux";
import {
    GENERATE_DATA,
    UPDATE_FILTERED_ROWS,
    UPDATE_PAGE,
    EDIT_USER_ROW
} from "../actions/row";
import {
    generateEmail,
    generateId,
    generateName
} from "../../Functions/RandomFunctions";

function generateRows() {
    const amountOfRows = 100;
    const result = [];

    for (let i = 0; i < amountOfRows; i++) {
        result.push({
            id: generateId(),
            name1: generateName(),
            name2: generateName(),
            name3: generateName(),
            email: generateEmail(),
            uniqueId: i,
        })
    }

    return result;
};

const generateUserRow = (state = generateRows(), action) => {
    switch (action.type) {
        case GENERATE_DATA:
            return [...action.data];
        case EDIT_USER_ROW:
            return [...action.data];
        default:
            return state;
    }
};

const updatedData = (state = [], action) => {
    switch (action.type) {
        case UPDATE_FILTERED_ROWS:
            return [...action.data];
        case EDIT_USER_ROW:
            return [...action.data];
        default:
            return state;
    }
};

const page = (state = 1, action) => {
    switch (action.type) {
        case UPDATE_PAGE:
            return action.page;
        case UPDATE_FILTERED_ROWS:
            return 1;
        default:
            return state;
    }
};

export const filterText = (state = '', action)=>{
  return state;
};



export const userRowsReducer = combineReducers({
    updatedData,
    page,
    generateUserRow,
    filterText
});