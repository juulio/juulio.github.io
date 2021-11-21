/**
 * Returns a random int between two int values.
 * @param {*} min 
 * @param {*} max 
 * @returns int
 */
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

/**
 * Returns a random floating point number between two values
 * @param {*} min 
 * @param {*} max 
 * @returns float
 */
const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

export {getRandomArbitrary, getRandomInt}