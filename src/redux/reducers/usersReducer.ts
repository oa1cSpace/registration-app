import {combineReducers} from "redux";
import {
    GENERATE_DATA,
    UPDATE_FILTERED_ROWS,
    UPDATE_PAGE,
    EDIT_USER_ROW,
    GET_TEXT,
    RowAction,
} from "../actions/rowAction";

const rows = (state: Array<string> = [], action: RowAction): Array<string> => {
    switch (action.type) {
        case GENERATE_DATA:
        case EDIT_USER_ROW:

            // @ts-ignore
            return [...(action.data || [])].map((item, index: number) => {
                item.idx = index;
                return item;
            });

        default:
            return state;
    }
};


const page = (state: number = 1, action: RowAction): number => {
    switch (action.type) {
        case UPDATE_PAGE:
            return action.page;
        case UPDATE_FILTERED_ROWS:
            return 1;
        default:
            return state;
    }
};

const filterText = (state: string = '', action: RowAction): string => {
    switch (action.type) {
        case GET_TEXT:
            return action.text;
        default:
            return state;
    }
};


export const usersReducer = combineReducers({
    rows,
    page,
    filterText
});

