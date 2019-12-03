const { add } = require('./calculator');

/**
 * Student Name
 * @type {string}
 */
const studentName = 'John Doe';

/**
 * Array with all types
 * @type {Array}
 */
const random = [98, 87, true, false, 'John Doe'];

/**
 * Array of numbers
 * @type {Array<number>}
 */
const grades = [1, 2, 3, 4, 5];

/**
 * Object with spcifict types
 * @type {{id: number|string, text: string}}
 */
const todo = {
  id: 1,
  text: 'hello'
};

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};

/**
 * A student custom type
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive- Student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: 'John Doe',
  age: 20,
  isActive: true
};

/**
 * Class to create a person object
 */
class Person {
  /**
   *
   * @param {*} personInfo Information about the person
   */
  constructor(personInfo) {
    /**
     * @property {string} name Persons name
     */
    this.name = personInfo.name;
    /**
     * @property {number} age Persons age
     */
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet A greeting with the name
   * @returns void
   */
  greet() {
    console.log(`Hello my name is ${this.name}`);
  }
}

/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
  name: 'John Doe',
  age: 30
});

console.log(person1.greet());
