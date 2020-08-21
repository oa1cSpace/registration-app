import {createSelector} from 'reselect';

// СЕЛЕКТОР ==> ф-ция принимающая state и что-то возвращающая.

// простой селектор
export const usersBaseSelector = (state) => state.rows;

const usersRawSelector = createSelector(
    // параметрами передается usersBaseSelector для получения значений state
    usersBaseSelector,
    // функция выбирающая что-то из state (логика селектора)
    (state) => state.generateUserRowte
);
const filterTextSelector = createSelector(
    usersBaseSelector,
    (state) => state.filterText
);

const usersSelector = createSelector(
    usersRawSelector,
    (items) => {
        return items.map((user) => {
            return {...user, name: 'test'};
        });
    }
);

export const usersSearchSelector = createSelector(
    [usersRawSelector, filterTextSelector],
    (items, text) => {
        return items.filter((user) => user.name.indexOf(text) !== 0);
    }
);



