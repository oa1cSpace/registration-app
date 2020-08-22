import {generateEmail, generateId, generateName} from "../Functions/RandomFunctions";

export const generateData = (amountOfRows = 100) => {
    const result = [];
    for (let i = 0; i < amountOfRows; i++) {
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