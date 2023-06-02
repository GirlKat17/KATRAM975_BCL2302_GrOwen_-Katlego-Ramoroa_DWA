// @ts-check

/**
 * Student Name
 * @type {string}
 */
const StudentName= 'Katlego Ramoroa';

/**
 * Array of grades
 * @type {Array<number>}
 */
const grade=[92,93,97,98];

/**
 * @type {{id: number|String, text: string}}
 */
const todo={
    id: 1,
    text:'hey'

};

/**
 * a function to calculate tax 
 * 
 * @param {number} amount 
 * @param {number} tax 
 * @returns 
 */
const calculateTax=(amount,tax)=> {
    return `R${amount+tax*amount}`;
};
console.log(calculateTax(100,0.1));
