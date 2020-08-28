import {createSelector} from 'reselect';

export const rowsPerPage = 10;

// СЕЛЕКТОР ==> ф-ция принимающая state и что-то возвращающая.

// простой селектор
export const usersBaseSelector: React.FunctionComponent <any> = (state) => state.users;

export const usersRawSelector = createSelector(
    // параметрами передается usersBaseSelector для получения значений state
    usersBaseSelector,
    // функция выбирающая что-то из state (логика селектора)
    (state: any) => state.rows
);
export const filterTextSelector = createSelector(
    usersBaseSelector,
    (state: any) => state.filterText
);

export const pageSelector = createSelector(
    usersBaseSelector,
    (state: any) => state.page
);

export const usersSelector = createSelector(
    [usersRawSelector, filterTextSelector],
    (items: any, text: string) => {
        const filterColumn = (searchPhrase: any, column: any) => {
            return column
                .toString()
                .toLowerCase()
                .includes(searchPhrase.toLowerCase());
        };

        return (items || []).filter((row: any) => {
            return Object.values(row)
                .filter((column: any) => filterColumn(text, column)).length;
        });
    }
);

export const getPagesCount = createSelector (
    [usersSelector],
    (items: any) => {
        return Math.ceil(items.length / rowsPerPage);
    }
);

export const currentPageSelector = createSelector(
    [getPagesCount, pageSelector],
    (count: number, page: number) => {
        if(page > count) {
            return 1
        }
        return page;
    }
);

export const indexOfLastRow = createSelector(currentPageSelector, (page: number): number => {
    return page * rowsPerPage;
});

export const indexOfFirstRow = createSelector(currentPageSelector,  (page: number): number => {
    return (page * rowsPerPage) - rowsPerPage;
});

export const usersPerPageSelector = createSelector(
    [usersSelector,indexOfLastRow, indexOfFirstRow],
    (items: any, last: number, first: number): any => {
        return (items || []).slice(first, last);
    }
);