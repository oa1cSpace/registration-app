import {generateEmail, generateId, generateName} from "../Functions/RandomFunctions";
import {UserRowInterface} from "../Interfaces/UserRowInterface";

export const generateData = (amountOfRows: number = 100): Array<UserRowInterface> => {
    const result: Array<UserRowInterface> = [];

    for (let i:number = 0; i < amountOfRows; i++) {
        result.push({
            id: generateId(),
            name1: generateName(),
            name2: generateName(),
            name3: generateName(),
            email: generateEmail(),
        })
    }

    return result;
}