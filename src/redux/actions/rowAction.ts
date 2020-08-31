export const GENERATE_DATA = '[table] generate user data in rows';
export const UPDATE_FILTERED_ROWS = '[table] update filtered rows';
export const UPDATE_PAGE = '[table] update page';
export const EDIT_USER_ROW = '[table] edit user row';
export const GET_TEXT = '[table-filter] add text in filter input';
export const DELETE_USER_ROW = '[table] delete user row';

// function inferLiteralFromString<T extends string>(arg: T): T {
//     return arg;
// }

// export const addUsersData = (data?: string | Array<string>) => {
//     return {
//         type: inferLiteralFromString(GENERATE_DATA),
//         data,
//     };
// };
//
// export const updateFilteredRows = (data?: string | Array<string>) => {
//     return {
//         type: inferLiteralFromString(UPDATE_FILTERED_ROWS),
//         data,
//     };
// };
//
// export const updatePage = (page: number) => {
//     return {
//         type: inferLiteralFromString(UPDATE_PAGE),
//         page,
//     };
// };
//
// export const editUser = (rows: string) => {
//     return {
//         type: inferLiteralFromString(EDIT_USER_ROW),
//         data: rows,
//     };
// };
//
// export const addTextInInput = (text: string) => {
//     return {
//         type: inferLiteralFromString(GET_TEXT),
//         text
//     }
// };
//
// export const deleteUser = (data?: string | Array<string>) => {
//     return {
//         type: inferLiteralFromString(DELETE_USER_ROW),
//         data
//     }
// };

export const addUsersData = (data?: string | Array<string>) => (<const>{
        type: GENERATE_DATA,
        data,
});

export const updateFilteredRows = (data?: string | Array<string>) => (<const>{
        type: UPDATE_FILTERED_ROWS,
        data,
});

export const updatePage = (page: number) => (<const>{
        type: UPDATE_PAGE,
        page,
});

export const editUser = (rows: string) => (<const>{
        type: EDIT_USER_ROW,
        data: rows,
});

export const addTextInInput = (text: string) => (<const>{
        type: GET_TEXT,
        text
});

export const deleteUser = (data?: string | Array<string>) => (<const>{
        type: DELETE_USER_ROW,
        data
});

export type RowAction =
    ReturnType<typeof addUsersData> |
    ReturnType<typeof updateFilteredRows> |
    ReturnType<typeof updatePage> |
    ReturnType<typeof editUser> |
    ReturnType<typeof addTextInInput> |
    ReturnType<typeof deleteUser>;
